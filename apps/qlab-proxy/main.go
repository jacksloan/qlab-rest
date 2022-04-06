package main

import (
	"embed"
	"flag"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/jacksloan/qlab-rest/libs/proxy"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

//go:embed all:public/*
var files embed.FS

func main() {
	port := flag.Int("port", 5000, "port number")
	flag.Parse()

	router := mux.NewRouter()

	log.Println("searching QLab instances")
	qlabAddress := proxy.PromptServiceSelection()
	log.Printf("QLab instance selected %s", qlabAddress)

	tcpClient := proxy.NewTcpClient(qlabAddress)
	ready := make(chan struct{})
	go tcpClient.Listen(ready)
	<-ready

	path := "/api"

	router.PathPrefix(path).Methods(http.MethodPost).Handler(proxy.HandleOsc(tcpClient, path))
	router.PathPrefix("/").HandlerFunc(proxy.HandleStatic(files, "public"))

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})
	cors := handlers.CORS(headersOk, originsOk, methodsOk)

	srv := &http.Server{
		Handler:      cors(router),
		Addr:         fmt.Sprintf("0.0.0.0:%d", *port),
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Printf("listening at http://%s:%d", proxy.GetOutboundIP(), *port)
	log.Fatal(srv.ListenAndServe())
}
