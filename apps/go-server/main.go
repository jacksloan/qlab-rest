package main

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/gorilla/mux"
	"github.com/hypebeast/go-osc/osc"
)

//go:embed all:build/*
var staticFiles embed.FS
var oscClient *osc.Client = osc.NewClient("localhost", 53000)

func main() {
	router := mux.NewRouter()
	router.Path(`/api/{rest:[a-zA-Z0-9=\-\/]+}`).Methods(http.MethodPost, http.MethodGet).HandlerFunc(handleOscCommand)
	router.PathPrefix("/").HandlerFunc(handleStaticFiles)
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

type OscCommand struct {
	Arguments string
}

func handleOscCommand(w http.ResponseWriter, r *http.Request) {
	// var command OscCommand

	defer r.Body.Close()

	params := mux.Vars(r)
	address := "/" + params["rest"]
	// decoder := json.NewDecoder(r.Body)

	// if err := decoder.Decode(&command); err != nil {
	// 	http.Error(w, err.Error(), http.StatusBadRequest)
	// 	return
	// }

	msg := osc.NewMessage(address)
	// if command.Arguments != "" {
	// 	msg.Append(command.Arguments)
	// }

	oscClient.Send(msg)

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
}

func handleStaticFiles(w http.ResponseWriter, r *http.Request) {
	// get the absolute path to prevent directory traversal
	path, err := filepath.Abs(r.URL.Path)
	if err != nil {
		// if we failed to get the absolute path respond with a 400 bad request and stop
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	// prepend the path with the path to the static directory
	path = filepath.Join("build", path)

	_, err = staticFiles.Open(path)
	if os.IsNotExist(err) {
		// file does not exist, serve index.html
		index, err := staticFiles.ReadFile(filepath.Join("build", "index.html"))
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		w.Header().Set("Content-Type", "text/html; charset=utf-8")
		w.WriteHeader(http.StatusAccepted)
		w.Write(index)
		return
	} else if err != nil {
		// if we got an error (that wasn't that the file doesn't exist) stating the
		// file, return a 500 internal server error and stop
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	// get the subdirectory of the static dir
	statics, err := fs.Sub(staticFiles, "build")
	// otherwise, use http.FileServer to serve the static dir
	http.FileServer(http.FS(statics)).ServeHTTP(w, r)
}
