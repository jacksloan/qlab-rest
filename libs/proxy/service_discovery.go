package proxy

import (
	"context"
	"fmt"
	"time"

	"github.com/grandcat/zeroconf"
)

func DiscoverQlabServices() ([]*zeroconf.ServiceEntry, error) {
	// Discover all services on the network (e.g. _workstation._tcp)
	resolver, err := zeroconf.NewResolver(nil)
	if err != nil {
		return nil, fmt.Errorf("Failed to initialize resolver %w", err)
	}

	ch := make(chan *zeroconf.ServiceEntry)
	entries := make(chan []*zeroconf.ServiceEntry)
	go func(ch <-chan *zeroconf.ServiceEntry) {
		var s []*zeroconf.ServiceEntry
		for entry := range ch {
			s = append(s, entry)
		}
		entries <- s
	}(ch)

	ctx, cancel := context.WithTimeout(context.Background(), time.Millisecond*500)
	defer cancel()

	err = resolver.Browse(ctx, "_qlab._tcp", "", ch)
	if err != nil {
		return nil, fmt.Errorf("Failed to browse _qlab._tcp %w", err)
	}
	<-ctx.Done()

	return <-entries, nil
}
