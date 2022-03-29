package main

import (
	"embed"
	"fmt"
	"log"
	"path"
)

//go:embed all:build/*
var staticFs embed.FS

func main() {
	files, err := staticFs.ReadDir(path.Join("build", "_app", "assets", "pages"))
	if err != nil {
		log.Fatal(err)
	}

	for _, file := range files {
		fmt.Println(file.Name(), file.IsDir())
	}
}
