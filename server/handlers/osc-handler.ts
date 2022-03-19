import type { Request, Response } from "express";
import { Osc } from "../services/osc";

export function handleOscCommand(osc: Osc) {
  return async function (req: Request, res: Response) {
    const { body, baseUrl } = req;
    console.log({ body, baseUrl });
    const commandAddress = baseUrl.split("/api")[1];
    const response = await osc.sendOscCommand(
      `/${commandAddress}`,
      req.method === "POST"
    );
    res.send(response);
  };
}
