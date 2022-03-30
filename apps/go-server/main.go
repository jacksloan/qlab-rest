package main

import (
	"embed"
	"goodwin/apps/go-server/handlers"
	"goodwin/apps/go-server/qlab"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
)

//go:embed all:build/*
var files embed.FS

func main() {
	router := mux.NewRouter()
	qlab := qlab.New()
	go qlab.Listen()

	router.
		Path(`/api/{rest:[a-zA-Z0-9=\-\/]+}`).
		Methods(http.MethodPost, http.MethodPut, http.MethodGet).
		HandlerFunc(handlers.HandleOsc(qlab))

	router.
		PathPrefix("/").
		Methods(http.MethodGet).
		HandlerFunc(handlers.HandleStatic(files))

	port := "5000"
	srv := &http.Server{
		Handler:      router,
		Addr:         "127.0.0.1:" + port,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Println("listing on port", port)
	log.Fatal(srv.ListenAndServe())
}
