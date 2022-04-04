/*
Package proxy provides utilities for interacting with QLab over TCP
*/
package proxy

import (
	"errors"
	"fmt"
	"log"
	"net"
	"strings"
	"time"

	"github.com/jacksloan/qlab-rest/libs/proxy/internal"

	"github.com/Lobaro/slip"
	"github.com/google/uuid"
	"github.com/hypebeast/go-osc/osc"
)

const (
	statusOk = `{"status":"ok"}`
)

type QlabTcpClient struct {
	address  string
	writer   *slip.Writer
	channels *internal.Channels
}

// NewTcpClient creates a new client
func NewTcpClient(qlabAddress string) *QlabTcpClient {
	return &QlabTcpClient{
		channels: internal.NewChannelsMap(),
		address:  qlabAddress,
	}
}

// GetOutboundIP returns the host IP this API responds to
func GetOutboundIP() net.IP {
	conn, err := net.Dial("udp", "8.8.8.8:80")
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	localAddr := conn.LocalAddr().(*net.UDPAddr)

	return localAddr.IP
}

// Listen dials the QlabTcpClient address and
// sends a ready signal when able to send OSC messages
func (q *QlabTcpClient) Listen(ready chan struct{}) {
	conn, err := net.Dial("tcp", q.address)
	if err != nil {
		log.Fatal("Failed to dial tcp network 127.0.0.1:53000", err)
	}
	defer conn.Close()
	q.writer = slip.NewWriter(conn)
	ready <- struct{}{}

	for {
		r := slip.NewReader(conn)
		reply, _, err := r.ReadPacket()
		if err != nil {
			fmt.Println("error reading packet, sleeping for 200ms")
			time.Sleep(200 * time.Millisecond)
		}
		q.handlePacket(reply)
	}
}

// Send sends an osc message over tcp
// if expectResponse is true it will wait up to 3 seconds to return a corresponding reply message
func (q *QlabTcpClient) Send(oscAddress string, oscArguments []string, expectResponse bool) (string, error) {
	if !expectResponse {
		if err := q.WritePacket(oscAddress, oscArguments); err != nil {
			return "", err
		}
		return statusOk, nil
	}

	if err := q.WritePacket(oscAddress, oscArguments); err != nil {
		return "", err
	}
	replyAddress := "/reply" + oscAddress
	replyKey := uuid.NewString()
	ch := make(chan string)

	q.channels.Set(replyAddress, replyKey, ch)

	select {
	case res := <-ch:
		return res, nil
	case <-time.After(3 * time.Second):
		q.channels.Remove(replyAddress, replyKey)
		return statusOk, nil
	}
}

// WritePacket encodes an OSC message and writes it to the connection using the SLIP protocol
func (q *QlabTcpClient) WritePacket(oscAddress string, oscArguments []string) error {
	if err := q.canWrite(); err != nil {
		return err
	}

	msg := osc.NewMessage(oscAddress)
	for _, arg := range oscArguments {
		msg.Append(arg)
	}
	b, err := msg.MarshalBinary()
	if err != nil {
		return err
	}

	if err := q.writer.WritePacket(b); err != nil {
		return err
	}

	return nil
}

// handle packet takes an OSC replies and sends the reply body on the corresponding channel
func (q *QlabTcpClient) handlePacket(b []byte) {
	res := strings.Split(string(b), ",s")
	address := strings.Trim((res[0]), "\x00") // remove null characters
	body := strings.Trim((res[1]), "\x00")    // remove null characters
	q.channels.ForEach(
		address,
		func(key string, ch chan string) {
			ch <- body
			close(ch)
			q.channels.Remove(address, key)
		},
	)
}

func (q *QlabTcpClient) canWrite() error {
	if q.writer == nil {
		return errors.New("cannot write to connection, writer is nil")
	}
	return nil
}
