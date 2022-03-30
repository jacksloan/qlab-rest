package handlers

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/hypebeast/go-osc/osc"
)

type OscCommand struct {
	Arguments string
}

func HandleOscCommand(oscClient *osc.Client, replies map[string][]chan string) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
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
		ch := make(chan string)
		replies[address] = append(replies[address], ch)

		select {
		case res := <-ch:
			fmt.Println("chan response", res)
		case <-time.After(1 * time.Second):
			fmt.Println("chan timeout")
		}

		oscClient.Send(msg)

		w.Header().Set("Content-Type", "application/json")
		w.WriteHeader(http.StatusOK)
	}

}
