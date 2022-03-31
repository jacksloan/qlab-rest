package qlab

import (
	"net"
	"os"

	"github.com/Lobaro/slip"
	"github.com/hypebeast/go-osc/osc"
)

func tcp() {
	servAddr := "127.0.0.1:53000"
	tcpAddr, err := net.ResolveTCPAddr("tcp", servAddr)
	handleError("ResolveTCPAddr failed:", err)

	conn, err := net.DialTCP("tcp", nil, tcpAddr)
	handleError("Dial failed:", err)

	p := osc.NewMessage("/workspaces")
	b, err := p.MarshalBinary()
	handleError("Failed to marshal binary:", err)
	w := slip.NewWriter(conn)

	error := w.WritePacket(b)
	handleError("Failed to write packet:", error)

	// _, err = conn.Write()
	if err != nil {
		println("Write to server failed:", err.Error())
		os.Exit(1)
	}

	// println("write to server = ", pa`cket)
	r := slip.NewReader(conn)
	reply, _, _ := r.ReadPacket()
	if err != nil {
		println("Write to server failed:", err.Error())
		os.Exit(1)
	}

	println("reply from server=", string(reply))

	conn.Close()
}

func handleError(prefix string, err error) {
	if err != nil {
		println(prefix, err.Error())
		os.Exit(1)
	}
}
