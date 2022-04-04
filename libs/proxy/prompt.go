package proxy

import (
	"fmt"
	"log"
	"os"
	"strings"

	"github.com/manifoldco/promptui"
)

func PromptServiceSelection() string {
	entries, err := DiscoverQlabServices()
	if err != nil {
		log.Fatalln("Failed to discover QLab services", err)
	}

	if len(entries) < 1 {
		log.Println(
			"no running instances of qlab discovered on 0.0.0.0",
			"make sure QLab is running")
		os.Exit(0)
	}

	var items []string
	for _, v := range entries {
		var ip []string
		for _, v := range v.AddrIPv4 {
			ip = append(ip, v.String())
		}
		items = append(items, fmt.Sprintf("%s %s:%d", v.HostName, strings.Join(ip, "."), v.Port))
	}

	prompt := promptui.Select{
		Label: "Select QLab Instance",
		Items: items,
	}

	_, result, err := prompt.Run()
	if err != nil {
		log.Fatalln("Error selecting QLab service", err)
	}
	return strings.Fields(result)[1]
}
