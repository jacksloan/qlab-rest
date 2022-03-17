import type { Request, Response } from "express";
import { Osc } from "../services/osc";

export function handleGetWorkspaces(osc: Osc) {
  return async function (req: Request, res: Response) {
    const response = await osc.sendOscCommand("/workspaces", true);
    res.send(response);
  };
}

export function handleStartCue(osc: Osc) {
  return async function (req: Request, res: Response) {
    const { id } = req.params;
    const response = await osc.sendOscCommand(`/cue/${id}/go`, false);
    res.send(response);
  };
}
