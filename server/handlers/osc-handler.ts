import type { Request, Response } from "express";
import { Osc } from "../services/osc";

export function handleOscCommand(osc: Osc) {
  return async function (req: Request, res: Response) {
    const { command } = req.params;
    const response = await osc.sendOscCommand(`/${command}`, true);
    res.send(response);
  };
}
