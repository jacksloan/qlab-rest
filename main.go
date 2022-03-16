package main

import (
	"embed"
	"encoding/json"
	"io/fs"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"time"

	"github.com/gorilla/mux"
	"github.com/hypebeast/go-osc/osc"
)

//go:embed public
var staticFiles embed.FS

var oscClient *osc.Client = osc.NewClient("localhost", 53000)

func handleStaticFiles(w http.ResponseWriter, r *http.Request) {
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
	Address   string
	Arguments string
}

func handleOscCommand(w http.ResponseWriter, r *http.Request) {
	var command OscCommand

	defer r.Body.Close()

	decoder := json.NewDecoder(r.Body)

	err := decoder.Decode(&command)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	msg := osc.NewMessage(command.Address)
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

func main() {
	router := mux.NewRouter()

	router.Path("/api/health").Methods(http.MethodGet).HandlerFunc(handleHealthCheck)

	router.Path("/api/osc").Methods(http.MethodPost).HandlerFunc(handleOscCommand)

	router.PathPrefix("/").HandlerFunc(handleStaticFiles)

	port := "8000"
	srv := &http.Server{
		Handler:      router,
		Addr:         "127.0.0.1:" + port,
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	log.Println("sir goodwin is listing on port", port)
	log.Fatal(srv.ListenAndServe())
}
