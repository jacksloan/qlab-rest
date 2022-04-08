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

var (
	//go:embed all:public/*
	files embed.FS

	host = flag.String("host", "127.0.0.1", "host name")
	port = flag.Int("port", 5000, "port number")
)

func main() {
	flag.Parse()

	log.Println("searching QLab instances")
	qlabAddress := proxy.PromptServiceSelection()
	log.Printf("QLab instance selected %s", qlabAddress)

	tcpClient := proxy.NewTcpClient(qlabAddress)
	go tcpClient.Listen(make(chan struct{}, 1))

	router := mux.NewRouter()
	path := "/api"
	router.PathPrefix(path).Handler(proxy.HandleOsc(tcpClient, path))
	router.PathPrefix("/").HandlerFunc(proxy.HandleStatic(files, "public"))

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})
	cors := handlers.CORS(headersOk, originsOk, methodsOk)

	srv := &http.Server{
		Handler:      cors(router),
		Addr:         fmt.Sprintf("%s:%d", *host, *port),
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	log.Printf("listening at http://%s:%d", proxy.GetOutboundIP(), *port)
	log.Fatal(srv.ListenAndServe())
}
