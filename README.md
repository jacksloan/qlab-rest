# About

Various apps and libs for interacting with QLab workspaces

# Development Setup

To run this project make sure you have the following installed:

- [Golang](https://go.dev/dl/)
- [Gow](https://github.com/mitranim/gow)
- [NodeJS](https://nodejs.org/en/)
- (Optional) to run the swagger codegen, you must also have a Java SDK on your path

Run `npm install`

Build and run commands can be found in the script section of this projects `package.json`

# (App) Goodwin

Goodwin is a SvelteKit application for configuring voice commands that trigger QLab cues

Develop locally with `npm run start:goodwin`

[See Project README for more info](./apps/goodwin/README.md)

# (App) Qlab Rest

QLab Rest proxies http requests to QLab as OSC messages

Develop locally with `npm run start:qlab-rest`

[See Project README for more info](./apps/qlab-rest/README.md)

# (App) voice-cmd

Voice cmd is an example application that demonstrates speech-to-text commands that trigger QLab cues

Develop locally with `npm run start:voice-cmd`

[See Project README for more info](./apps/voice-cmd/README.md)

# (Lib) Proxy

Proxy is a go library for interacting with QLab via TCP

[Documentation](https://pkg.go.dev/github.com/jacksloan/qlab-rest/libs/proxy)

# (Generator) Scraper

Scraper reads the QLab OSC dictionary page from https://qlab.app/docs/v4/scripting/osc-dictionary-v4/ and creates a OpenAPI V3 specification file

Usage: `npm run scraper` or `npx nx workspace-generator scraper --dir=some/directory`

# TODO

- [x] Trigger an API endpoint using speech-to-text
- [x] Initial speech-to-text proof of concept
- [x] Use speech-to-text to trigger a QLab workspace cue
- [x] Translate JSON to OSC messages
- [x] Implement the QLab OSC API
- [x] Convert server implementation to Rust or Go for smaller binaries
- [x] Release binaries on Github 
- [ ] Create a GUI for configuring/triggering QLab cues
