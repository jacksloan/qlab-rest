package proxy

import (
	"embed"
	"io/fs"
	"net/http"
	"os"
	"path"
)

func HandleStatic(files embed.FS, dir string) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		// prepend the path with the path to the static directory
		fp := path.Join(dir, r.URL.Path)

		_, err := files.Open(fp)
		if os.IsNotExist(err) {
			// file does not exist, serve index.html
			index, err := files.ReadFile(path.Join(dir, "index.html"))
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
