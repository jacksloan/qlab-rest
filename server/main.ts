//I solve the problem at this place
import express from "express";
import * as path from "path";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import { handleOscCommand } from "./handlers/osc-handler";
import { handleServerSpa as handleServeSpa } from "./handlers/spa-handler";
import { Osc } from "./services/osc";

const app = express();
const port = process.env.PORT || 5000;
const osc = new Osc();

// api
app.use("/api", express.json({ strict: false }));
app.use("/api(/*)?", handleOscCommand(osc));

// swagger
const swaggerPath = path.join(__dirname, "..", "spec.json");
const swaggerDocument = fs.readFileSync(swaggerPath);
app.use("/api-docs", express.static(path.join(__dirname, "..", "api-docs")));
app.use("/api-docs", swaggerUi.serve);
app.get("/api-docs", swaggerUi.setup(JSON.parse(swaggerDocument.toString())));

// single page app assets
app.use(express.static(path.join(__dirname, "..", "client")));
app.use("/", handleServeSpa);

osc.open({
  onReady: () => {
    app.listen(5000);
    console.log(`app listening on ${port}`);
  },
});
