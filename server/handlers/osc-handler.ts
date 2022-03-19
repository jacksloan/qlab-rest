import type { Request, Response } from "express";
import { Osc } from "../services/osc";

export function handleOscCommand(osc: Osc) {
  return async function (req: Request, res: Response) {
    const { body, baseUrl } = req;
    const commandAddress = baseUrl.split("/api")[1];
    const expectResponse = req.method === "POST";
    const response = await osc.sendOscCommand(
      commandAddress,
      expectResponse,
      Object.values(body || {})
    );
    // console.log({ body, baseUrl, commandAddress });
    res.send(response);
  };
}
