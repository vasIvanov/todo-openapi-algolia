import { Request, Response } from "express";
import { healthService } from "../services/healthService";

export async function checkHealth(_: Request, res: Response): Promise<void> {
  try {
    const healthServices = healthService();
    const response = await healthServices.check();

    res.status(200).send({ data: response });
  } catch (error: any) {
    res.status(error.status).send(error);
  }
}
