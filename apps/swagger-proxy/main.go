package main

import (
	"embed"
	"flag"
	"fmt"
	"log"
	"net/http"

	"github.com/jacksloan/qlab-rest/libs/proxy"

	"github.com/gorilla/mux"
)

//go:embed all:swagger/*
var files embed.FS

func main() {
	port := flag.Int("port", 5001, "port number")
	flag.Parse()

	log.Println("searching QLab instances")
	qlabAddress := proxy.PromptServiceSelection()
	log.Printf("QLab instance selected %s", qlabAddress)

	tcpClient := proxy.NewTcpClient(qlabAddress)
	ready := make(chan struct{})
	go tcpClient.Listen(ready)

	router := mux.NewRouter()
	path := "/api"
	router.PathPrefix(path).Handler(proxy.HandleOsc(tcpClient, path))
	router.PathPrefix("/").HandlerFunc(proxy.HandleStatic(files, "swagger"))

	log.Printf("listing at http://localhost:%d", *port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf("127.0.0.1:%d", *port), router))
}
