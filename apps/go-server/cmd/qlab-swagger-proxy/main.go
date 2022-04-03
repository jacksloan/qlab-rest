package main

import (
	"embed"
	"goodwin/apps/go-server/pkg"
	"log"
	"net/http"
	"time"

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

	router.Path(pkg.OscApiPath("/api")).HandlerFunc(pkg.HandleOsc(tcpClient))

	router.PathPrefix("/").HandlerFunc(pkg.HandleStatic(files, "public"))

	port := "5000"

	srv := &http.Server{
		Handler:      router,
		Addr:         "127.0.0.1:" + port,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Printf("listing at http://%s:%s", pkg.GetOutboundIP(), port)
	log.Fatal(srv.ListenAndServe())
}
