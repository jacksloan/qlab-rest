package main

import (
	"embed"
	"flag"
	"fmt"
	"log"
	"net/http"

	pkg "github.com/jacksloan/sir-goodwin/libs/proxy"

	"github.com/gorilla/mux"
)

//go:embed all:swagger/*
var files embed.FS

func main() {
	port := flag.Int("port", 5001, "port number")
	flag.Parse()

	router := mux.NewRouter()

	tcpClient := pkg.NewTcpClient()
	go tcpClient.Listen(make(chan<- bool))

	path := "/api"
	router.PathPrefix(path).Handler(pkg.HandleOsc(tcpClient, path))
	router.PathPrefix("/").HandlerFunc(pkg.HandleStatic(files, "swagger"))

	log.Printf("listing at http://localhost:%d", *port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf("127.0.0.1:%d", *port), router))
}
