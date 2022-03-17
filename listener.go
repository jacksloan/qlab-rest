package main

import (
	"fmt"
	"net"
)

func ReceiveFromQLab() {
	conn, err := net.ListenUDP("udp", &net.UDPAddr{
		Port: 53001,
		IP:   net.ParseIP("127.0.0.1"),
	})

	defer conn.Close()

	conn.SetReadBuffer(65_535)

	if err != nil {
		panic(err)
	}

	for {
		// read the maximum datagram size
		buf := make([]byte, 65_535)
		rlen, address, _ := conn.ReadFromUDP(buf[:])
		fmt.Println(address)
		go handlePacket(buf, rlen)
	}
}

func handlePacket(buf []byte, rlen int) {
	fmt.Println(string(buf[0:rlen]))
}
