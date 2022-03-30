package main

import (
	"embed"
	"goodwin/apps/go-server/handlers"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/hypebeast/go-osc/osc"
)

//go:embed all:build/*
var files embed.FS
var oscClient *osc.Client = osc.NewClient("localhost", 53000)

func main() {
	observers := make(map[string][]chan string)
	router := mux.NewRouter()

	router.
		Path(`/api/{rest:[a-zA-Z0-9=\-\/]+}`).
		Methods(http.MethodPost, http.MethodPut).
		HandlerFunc(handlers.HandleOscCommand(oscClient, observers))

	router.
		PathPrefix("/").
		Methods(http.MethodGet).
		HandlerFunc(handlers.ServeStatic(files))

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
