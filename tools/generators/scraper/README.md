# Scraper

Scrapes the QLab V4 OSC dictionary from https://qlab.app/docs/v4/scripting/osc-dictionary-v4/ and outputs a OpenAPI V3 json spec to the specified directory (--dir)

## Example CLI useage

(outputs swagger json document to `./apps/go-server/qlab-swagger-proxy/swagger/`)

```
npm run scraper
```

## Customizing schema components

Schemas properties should be customized in the apps/go-server/qlab-swagger-proxy/swagger/components folder and committed to git.

If the model cannot be sufficiently customized in the swagger json files, additional models can be added to the `customComponents` const in `./src/custom-components.ts`.
