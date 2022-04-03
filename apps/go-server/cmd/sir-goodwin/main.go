package main

import (
	"embed"
	"goodwin/apps/go-server/pkg"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

//go:embed all:public/*
var files embed.FS

func main() {
	router := mux.NewRouter()

	tcpClient := pkg.NewTcpClient()
	ready := make(chan bool)
	go tcpClient.Listen(ready)
	<-ready

	router.
		Path(pkg.OscApiPath("/api")).
		Methods(http.MethodPost, http.MethodPut, http.MethodGet).
		HandlerFunc(pkg.HandleOsc(tcpClient))

	router.
		PathPrefix("/").
		Methods(http.MethodGet).
		HandlerFunc(pkg.HandleStatic(files, "public"))

	port := "5000"
	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	srv := &http.Server{
		Handler:      handlers.CORS(headersOk, originsOk, methodsOk)(router),
		Addr:         "0.0.0.0:" + port,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Printf("listing at http://%s:%s", pkg.GetOutboundIP(), port)
	log.Fatal(srv.ListenAndServe())
}
