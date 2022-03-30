package qlab

import (
	"goodwin/apps/go-server/db"
	"log"
	"net"
	"strings"
	"time"

	"github.com/google/uuid"
	"github.com/hypebeast/go-osc/osc"
)

type Qlab struct {
	channels  *db.Channels
	oscClient *osc.Client
}

func New() *Qlab {
	return &Qlab{
		channels:  db.New(),
		oscClient: osc.NewClient("localhost", 53000),
	}
}

func (q *Qlab) Send(oscAddress string, expectResponse bool, timeout int64) string {

	if !expectResponse {
		return "{}"
	}

	ch := make(chan string)

	replyAddress := "/reply" + oscAddress

	replyKey := uuid.NewString()

	q.channels.Set(replyAddress, replyKey, ch)

	q.oscClient.Send(osc.NewMessage(oscAddress))

	select {
	case res := <-ch:
		return res
	case <-time.After(time.Duration(timeout) * time.Second):
		q.channels.Remove(replyAddress, replyKey)
		return "timed out listening for " + oscAddress
	}

}

func (q *Qlab) Listen() {
	conn, err := net.ListenUDP("udp", &net.UDPAddr{
		Port: 53001,
		IP:   net.ParseIP("127.0.0.1"),
	})

	defer conn.Close()

	conn.SetReadBuffer(65_535)

	if err != nil {
		log.Fatal(err)
	}

	for {
		// TODO: review if necessary to read the maximum datagram size
		buf := make([]byte, 65_535)
		rlen, _, _ := conn.ReadFromUDP(buf[:])
		go q.handleUDPPacket(buf, rlen)
	}
}

func (q *Qlab) handleUDPPacket(buf []byte, rlen int) {
	packet := string(buf[0:rlen])
	res := strings.Split(packet, ",s")
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
