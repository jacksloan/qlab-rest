package qlab

import (
	"github.com/google/uuid"
	cmap "github.com/orcaman/concurrent-map"
)

type Channels struct {
	db cmap.ConcurrentMap
}

func NewChannelsMap() *Channels {
	return &Channels{
		db: cmap.New(),
	}
}

func (it *Channels) Get(key string) (interface{}, bool) {
	return it.db.Get(key)
}

func (it *Channels) Set(replyAddress string, replyKey string, ch chan string) {
	if _, ok := it.Get(replyAddress); !ok {
		it.db.Set(replyAddress, cmap.New())
	}

	if tmp, ok := it.Get(replyAddress); ok {
		replyKey := uuid.NewString()
		channels := tmp.(cmap.ConcurrentMap)
		channels.Set(replyKey, ch)
	}
}

func (it *Channels) Remove(replyAddress string, replyKey string) {
	if tmp, ok := it.Get(replyAddress); ok {
		channels := tmp.(cmap.ConcurrentMap)
		channels.Remove(replyKey)
	}
}

func (it *Channels) ForEach(replyAddress string, fn func(string, chan string)) {
	if tmp, ok := it.Get(replyAddress); ok {
		inner := tmp.(cmap.ConcurrentMap)
		for replyKey, v := range inner.Items() {
			ch := v.(chan string)
			go fn(replyKey, ch)
		}
	}
}
