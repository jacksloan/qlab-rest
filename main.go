package main

import (
	"embed"
	"fmt"
	"io/fs"
	"log"
	"net/http"
)

//go:embed public
var embeddedFiles embed.FS

func hello(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "hello")
}

func main() {
	fmt.Println("hello world")

	fsys, err := fs.Sub(embeddedFiles, "public")
	if err != nil {
		panic(err)
	}

	go func() {
		serverMuxA := http.NewServeMux()
		serverMuxA.HandleFunc("/hello", hello)
		apiPort := ":8060"
		log.Println("listening on port", apiPort)
		http.ListenAndServe(apiPort, serverMuxA)
	}()

	appPort := ":8050"
	http.Handle("/", http.FileServer(http.FS(fsys)))
	log.Println("app started on port", appPort)
	log.Fatal(http.ListenAndServe(":8050", nil))
}
