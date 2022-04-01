package main

import (
	"embed"
	"goodwin/apps/go-server/handlers"
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

	tcp := qlab.NewTcpClient()
	isReady := make(chan bool)
	go tcp.Listen(isReady)
	<-isReady
	tcp.Send("/workspaces")

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
	corsConfig := middleware.AllowedOrigins([]string{"http://localhost:3000", "127.0.0.1:5000"})
	srv := &http.Server{
		Handler:      middleware.CORS(corsConfig)(router),
		Addr:         "127.0.0.1:" + port,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Println("listing on port", port)
	log.Fatal(srv.ListenAndServe())
}
