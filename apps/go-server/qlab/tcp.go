package qlab

import (
	"fmt"
	"goodwin/apps/go-server/db"
	"log"
	"net"
	"time"

	"github.com/Lobaro/slip"
	"github.com/hypebeast/go-osc/osc"
)

type QlabTcpClient struct {
	w *slip.Writer
	c *db.Channels
}

func NewTcpClient() *QlabTcpClient {
	return &QlabTcpClient{
		c: db.New(),
	}
}

func (q *QlabTcpClient) Listen(isReady chan bool) {
	conn, err := net.Dial("tcp", "127.0.0.1:53000")
	if err != nil {
		log.Fatal("Failed to dial tcp network 127.0.0.1:53000", err)
	}
	defer conn.Close()

	q.w = slip.NewWriter(conn)
	isReady <- true

	for {
		r := slip.NewReader(conn)
		reply, _, err := r.ReadPacket()
		if err != nil {
			fmt.Println("error reading packet, sleeping for 200ms")
			time.Sleep(200 * time.Millisecond)
		}
		fmt.Println(string(reply))
	}
}

func (q *QlabTcpClient) Send(command string) error {
	p := osc.NewMessage(command)
	// TODO allow args
	b, err := p.MarshalBinary()
	if err != nil {
		return err
	}
	if err := q.w.WritePacket(b); err != nil {
		return err
	}
	return nil
}
