package qlab

import (
	"errors"
	"fmt"
	"log"
	"net"
	"strings"
	"time"

	"github.com/Lobaro/slip"
	"github.com/google/uuid"
	"github.com/hypebeast/go-osc/osc"
)

type QlabTcpClient struct {
	writer   *slip.Writer
	channels *Channels
}

func NewTcpClient() *QlabTcpClient {
	return &QlabTcpClient{
		channels: NewChannelsMap(),
	}
}

func (q *QlabTcpClient) Listen(initialized chan<- bool) {
	conn, err := net.Dial("tcp", "127.0.0.1:53000")
	if err != nil {
		log.Fatal("Failed to dial tcp network 127.0.0.1:53000", err)
	}
	defer conn.Close()

	q.writer = slip.NewWriter(conn)
	initialized <- true

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

func (q *QlabTcpClient) Send(oscAddress string, oscArguments []string, expectResponse bool) (string, error) {
	if !expectResponse {
		if err := q.WritePacket(oscAddress, oscArguments); err != nil {
			return "", err
		}
		return "{}", nil
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
		return "{}", nil
	}
}

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
