package handlers

import (
	"net/http"

	"goodwin/apps/go-server/qlab"

	"github.com/gorilla/mux"
)

type OscCommand struct {
	Arguments string
}

func HandleOsc(q *qlab.Qlab) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		// var command OscCommand

		defer r.Body.Close()

		params := mux.Vars(r)
		oscAddress := "/" + params["rest"]
		// shouldAwaitReply := r.URL.Query().Get("has-reply") == "true"
		// decoder := json.NewDecoder(r.Body)

		// if err := decoder.Decode(&command); err != nil {
		// 	http.Error(w, err.Error(), http.StatusBadRequest)
		// 	return
		// }

		// if command.Arguments != "" {
		// 	msg.Append(command.Arguments)
		// }
		reply := q.Send(oscAddress, true, 3)

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(reply))
	}

}
