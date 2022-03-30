package listeners

import (
	"fmt"
	"log"
	"net"
)

func listenForQlab(observers map[string][]chan string) {
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
		rlen, address, _ := conn.ReadFromUDP(buf[:])
		fmt.Println(address)
		go handleUDPPacket(buf, rlen, observers)
	}
}

func handleUDPPacket(buf []byte, rlen int, observers map[string][]chan string) {
	packet := string(buf[0:rlen])
	fmt.Println("packet =", packet)
}
