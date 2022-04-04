package main

import (
	"embed"
	"flag"
	"fmt"
	"log"
	"net/http"
	"time"

	pkg "github.com/jacksloan/sir-goodwin/libs/proxy"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

//go:embed all:public/*
var files embed.FS

func main() {
	port := flag.Int("port", 5000, "port number")
	flag.Parse()

	router := mux.NewRouter()

	tcpClient := pkg.NewTcpClient()
	ready := make(chan bool)
	go tcpClient.Listen(ready)
	<-ready

	path := "/api"

	router.PathPrefix(path).Methods(http.MethodPost).Handler(pkg.HandleOsc(tcpClient, path))
	router.PathPrefix("/").HandlerFunc(pkg.HandleStatic(files, "public"))

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
	log.Printf("listing at http://%s:%d", pkg.GetOutboundIP(), *port)
	log.Fatal(srv.ListenAndServe())
}
