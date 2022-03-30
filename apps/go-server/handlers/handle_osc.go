package handlers

import (
	"net/http"
	"time"

	"github.com/google/uuid"
	"github.com/gorilla/mux"
	"github.com/hypebeast/go-osc/osc"
)

type OscCommand struct {
	Arguments string
}

func HandleOsc(oscClient *osc.Client, observers map[string]map[string]chan string) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		// var command OscCommand

		defer r.Body.Close()

		params := mux.Vars(r)
		address := "/" + params["rest"]
		// shouldAwaitReply := r.URL.Query().Get("has-reply") == "true"
		// decoder := json.NewDecoder(r.Body)

		// if err := decoder.Decode(&command); err != nil {
		// 	http.Error(w, err.Error(), http.StatusBadRequest)
		// 	return
		// }

		// if command.Arguments != "" {
		// 	msg.Append(command.Arguments)
		// }
		reply := sendAndAwait(oscClient, address, observers, 3)

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
		w.Write([]byte(reply))
	}

}

func sendAndAwait(oscClient *osc.Client, command string, observers map[string]map[string]chan string, timeout int64) string {
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
	case <-time.After(time.Duration(timeout) * time.Second):
		// cleanup observers on timeout
		delete(observers[replyFormat], replyKey)
		return "timed out listening for " + command
	}
}
