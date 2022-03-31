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

	w := slip.NewWriter(conn)
	p := osc.NewMessage("/workspaces")
	b, err := p.MarshalBinary()
	handleError("Failed to marshal binary:", err)
	error := w.WritePacket(b)
	handleError("Failed to write packet:", error)

	r := slip.NewReader(conn)
	reply, _, err := r.ReadPacket()
	handleError("Failed to read packet", err)

	println("reply from server=", string(reply))

	conn.Close()
}

func handleError(prefix string, err error) {
	if err != nil {
		println(prefix, err.Error())
		os.Exit(1)
	}
}
