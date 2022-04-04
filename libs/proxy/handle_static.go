package proxy

import (
	"embed"
	"io/fs"
	"net/http"
	"os"
	"path/filepath"
)

func HandleStatic(files embed.FS, dir string) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		// get the absolute path to prevent directory traversal
		path, err := filepath.Abs(r.URL.Path)
		if err != nil {
			// if we failed to get the absolute path respond with a 400 bad request and stop
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		// prepend the path with the path to the static directory
		path = filepath.Join(dir, path)

		_, err = files.Open(path)
		if os.IsNotExist(err) {
			// file does not exist, serve index.html
			index, err := files.ReadFile(filepath.Join(dir, "index.html"))
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
		statics, err := fs.Sub(files, dir)
		// otherwise, use http.FileServer to serve the static dir
		http.FileServer(http.FS(statics)).ServeHTTP(w, r)
	}
}
