# About

The QLab rest monorepo contains several demo apps and a Golang utility library for creating applications that interact with QLab

# Development Setup

To run this project make sure you have the following installed:

- [Golang](https://go.dev/dl/)
- [Gow](https://github.com/mitranim/gow)
- [NodeJS](https://nodejs.org/en/)

Run `npm install`

Build and run commands can be found in the script section of this projects `package.json`

# (App) Goodwin

Goodwin is a SvelteKit application for configuring voice commands that trigger QLab cues

To run locally, make sure a QLab project is open and run: `npm run start:goodwin`

[See Project README for more info](./apps/goodwin/README.md)

# (App) Qlab Proxy

QLab proxy is a general purpose OSC proxy server that hosts an embedded file server

To run locally, make sure a QLab project is open and run: `npm run start:qlab-proxy`

[See Project README for more info](./apps/qlab-proxy/README.md)

# (App) Swagger Proxy

Swagger proxy is serves a swagger-ui instance and proxies http requests to QLab

To run locally, make sure a QLab project is open and run: `npm run start:swagger-proxy`

[See Project README for more info](./apps/swagger-proxy/README.md)

# (App) voice-cmd

Voice cmd is an example application that demonstrates speech-to-text commands that trigger QLab cues

To run locally, make sure a QLab project is open and run: `npm run start:voice-cmd`

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
- [ ] Create a GUI for configuring/triggering QLab cues
