package proxy

import (
	"encoding/json"
	"io"
	"net/http"
)

func HandleOsc(q *QlabTcpClient, pathPrefix string) http.Handler {
	fn := func(w http.ResponseWriter, r *http.Request) {
		expectResponse := r.URL.Query().Get("expect-response") == "true"

		oscArguments, err := parseBodyToArgs(w, r)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		oscCommand := r.URL.Path
		reply, err := q.Send(oscCommand, oscArguments, expectResponse)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(reply))
	}
	return http.StripPrefix(pathPrefix, http.HandlerFunc(fn))
}

func parseBodyToArgs(w http.ResponseWriter, r *http.Request) ([]string, error) {
	defer r.Body.Close()
	body := make(map[string]string)
	decoder := json.NewDecoder(r.Body)
	arguments := []string{}
	if err := decoder.Decode(&body); err != nil {
		switch {
		case err == io.EOF:
			// empty body
		case err != nil:
			return nil, err
		}
	} else {
		for _, val := range body {
			arguments = append(arguments, val)
		}
	}
	return arguments, nil
}
