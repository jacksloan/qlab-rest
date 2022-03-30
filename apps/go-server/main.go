package main

import (
	"embed"
	"fmt"
	"goodwin/apps/go-server/handlers"
	"goodwin/apps/go-server/listeners"
	"log"
	"net/http"
	"time"

	"github.com/google/uuid"
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
	// test qlab command/reply
	go func() {
		observers := make(map[string]map[string]chan string)
		go listeners.ListenForQlab(observers)
		reply := sendCommand("/workspaces", observers)
		fmt.Println("response =", reply)
	}()

	log.Println("listing on port", port)
	log.Fatal(srv.ListenAndServe())
}

func sendCommand(command string, observers map[string]map[string]chan string) string {
	oscClient.Send(osc.NewMessage(command))
	observer := make(chan string)
	replyFormat := "/reply" + command

	if observers[replyFormat] == nil {
		observers[replyFormat] = make(map[string]chan string)
	}
	replyKey := uuid.NewString()
	observers[replyFormat][replyKey] = observer

	select {
	case res := <-observer:
		return res
	case <-time.After(3 * time.Second):
		// cleanup observers on timeout
		delete(observers[replyFormat], replyKey)
		return "timed out listening for " + command
	}
}
