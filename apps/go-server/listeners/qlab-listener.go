package listeners

import (
	"fmt"
	"log"
	"net"
	"strings"
)

func ListenForQlab(observers map[string]map[string]chan string) {
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
		go handleUDPPacket(buf, rlen, observers)
	}
}

func handleUDPPacket(buf []byte, rlen int, observers map[string]map[string]chan string) {
	packet := string(buf[0:rlen])
	res := strings.Split(packet, ",s")
	address := strings.Trim((res[0]), "\x00") // remove null characters
	body := strings.Trim((res[1]), "\x00")    // remove null characters
	obs := observers[address]

	if obs == nil {
		fmt.Println("no listeners for address", address)
		return
	}
	for key, ch := range obs {
		// send reply to the channel and remove it from the map
		go func(key string, ch chan string) {
			ch <- body
			delete(obs, key)
		}(key, ch)
	}
}
