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

	conn.SetReadBuffer(1048576)

	if err != nil {
		panic(err)
	}

	i := 0
	for {
		i++
		buf := make([]byte, 1024)
		rlen, _, _ := conn.ReadFromUDP(buf[:])
		go handlePacket(buf, rlen, i)
	}
}

func handlePacket(buf []byte, rlen int, count int) {
	fmt.Println(string(buf[0:rlen]))
	// fmt.Println(count)
}
