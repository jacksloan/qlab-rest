package qlab

import (
	"encoding/json"
	"io"
	"net/http"

	"github.com/gorilla/mux"
)

func HandleOsc(q *QlabTcpClient) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		params := mux.Vars(r)
		oscAddress := "/" + params["rest"]
		expectResponse := r.URL.Query().Get("expect-response") == "true"

		oscArguments, err := parseBodyToArgs(w, r)
		if err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}

		reply, err := q.Send(oscAddress, oscArguments, expectResponse)
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(reply))
	}
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
