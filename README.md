# About

Sir Goodwin uses the (experimental) [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) to translate voice commands into QLab OSC commands.

# (App) App

App is a web app that uses the web speech API to send QLab OSC commands

[See Project README for more info](./apps/app/README.md)

# (App) Server

Server hosts App and proxies OSC commands over http

[See Project README for more info](./apps/server/README.md)

# (App) Swagger Proxy

Swagger proxy is serves a swagger-ui instance and proxies http requests to QLab

[See Project README for more info](./apps/swagger-proxy/README.md)

# (Lib) Proxy

Proxy is a go library for interacting with QLab via TCP

[Documentation](https://pkg.go.dev/github.com/jacksloan/qlab-rest/libs/proxy)

# TODO

- [x] Trigger an API endpoint using speech-to-text
- [x] Initial speech-to-text proof of concept
- [x] Use speech-to-text to trigger a QLab workspace cue
- [x] Translate JSON to OSC messages
- [x] Implement the QLab OSC API
- [x] Convert server implementation to Rust or Go for smaller binaries
- [ ] Create a GUI for configuring/triggering QLab cues
