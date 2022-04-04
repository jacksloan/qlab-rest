package main

import (
	"embed"
	"flag"
	"fmt"
	"log"
	"net/http"
	"time"

	pkg "github.com/jacksloan/qlab-rest/libs/handlers"

	"github.com/gorilla/mux"
)

//go:embed all:swagger/*
var files embed.FS

func main() {
	port := flag.Int("port", 5001, "port number")
	flag.Parse()

	router := mux.NewRouter()

	tcpClient := pkg.NewTcpClient()
	ready := make(chan bool)
	go tcpClient.Listen(ready)
	<-ready

	router.Path(pkg.OscApiPath("/api")).HandlerFunc(pkg.HandleOsc(tcpClient))
	router.PathPrefix("/").HandlerFunc(pkg.HandleStatic(files, "swagger"))

	srv := &http.Server{
		Handler:      router,
		Addr:         fmt.Sprintf("127.0.0.1:%d", *port),
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Printf("listing at http://localhost:%d", *port)
	log.Fatal(srv.ListenAndServe())
}
