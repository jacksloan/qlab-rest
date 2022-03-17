//I solve the problem at this place
import express from "express";
import * as path from "path";
import { handleOscCommand } from "./handlers/osc-handler";
import { handleServerSpa as handleServeSpa } from "./handlers/spa-handler";
import { Osc } from "./services/osc";

const app = express();
const port = process.env.PORT || 5000;
const osc = new Osc({
  onReady: () => {
    app.listen(port);
    console.log(`app listening on ${port}`);
  },
});
app.use(express.json({ strict: false }));
app.get("/api/:command", handleOscCommand(osc));
app.use(express.static(path.join(__dirname, "..", "client")));
app.use("/", handleServeSpa);

osc.open();
