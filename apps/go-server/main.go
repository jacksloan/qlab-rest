package main

import (
	"embed"
	"goodwin/apps/go-server/qlab"
	"log"
	"net/http"
	"time"

	middleware "github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

//go:embed all:build/*
var files embed.FS

func main() {
	router := mux.NewRouter()

	tcpClient := qlab.NewTcpClient()
	ready := make(chan bool)
	go tcpClient.Listen(ready)
	<-ready

	router.
		Path(`/api/{rest:[a-zA-Z0-9=\-\/]+}`).
		Methods(http.MethodPost, http.MethodPut, http.MethodGet).
		HandlerFunc(qlab.HandleOsc(tcpClient))

	router.
		PathPrefix("/").
		Methods(http.MethodGet).
		HandlerFunc(qlab.HandleStatic(files))

	port := "5000"
	headersOk := middleware.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	originsOk := middleware.AllowedOrigins([]string{"*"})
	methodsOk := middleware.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	srv := &http.Server{
		Handler:      middleware.CORS(headersOk, originsOk, methodsOk)(router),
		Addr:         "127.0.0.1:" + port,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Println("listing on port", port)
	log.Fatal(srv.ListenAndServe())
}
