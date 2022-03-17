package main

import (
	"embed"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/hypebeast/go-osc/osc"
)

//go:embed public
var staticFiles embed.FS

var oscClient *osc.Client = osc.NewClient("localhost", 53000)

func main() {
	router := mux.NewRouter()

	router.Path("/api/health").Methods(http.MethodGet).HandlerFunc(handleHealthCheck)

	router.Path("/api/osc/{rest:[a-zA-Z0-9/]+}").Methods(http.MethodPost).HandlerFunc(HandleOscCommand)

	router.PathPrefix("/").HandlerFunc(HandleServeSvelte)

	port := "8000"
	srv := &http.Server{
		Handler:      router,
		Addr:         "127.0.0.1:" + port,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	go ReceiveFromQLab()

	log.Println("sir goodwin is listing on port", port)
	log.Fatal(srv.ListenAndServe())
}
