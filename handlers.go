package main

import (
	"encoding/json"
	"io/fs"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gorilla/mux"
	"github.com/hypebeast/go-osc/osc"
)

func HandleServeSvelte(w http.ResponseWriter, r *http.Request) {
	// get the absolute path to prevent directory traversal
	path, err := filepath.Abs(r.URL.Path)
	if err != nil {
		// if we failed to get the absolute path respond with a 400 bad request and stop
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	// prepend the path with the path to the static directory
	path = filepath.Join("public", path)

	_, err = staticFiles.Open(path)
	if os.IsNotExist(err) {
		// file does not exist, serve index.html
		index, err := staticFiles.ReadFile(filepath.Join("public", "index.html"))
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
	statics, err := fs.Sub(staticFiles, "public")
	// otherwise, use http.FileServer to serve the static dir
	http.FileServer(http.FS(statics)).ServeHTTP(w, r)
}

type OscCommand struct {
	Arguments string
}

func HandleOscCommand(w http.ResponseWriter, r *http.Request) {
	var command OscCommand

	defer r.Body.Close()

	params := mux.Vars(r)

	address := "/" + params["rest"]
	log.Println("address =", address)

	decoder := json.NewDecoder(r.Body)

	err := decoder.Decode(&command)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	msg := osc.NewMessage(address)
	if command.Arguments != "" {
		msg.Append(command.Arguments)
	}

	oscClient.Send(msg)

	w.WriteHeader(http.StatusOK)

	json.NewEncoder(w).Encode(command)
}

func handleHealthCheck(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(map[string]bool{"ok": true})
}
