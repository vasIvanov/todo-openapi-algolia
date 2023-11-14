import { Request, Response } from "express";
import { authService } from "../services/authService";

export async function registerUser(req: Request, res: Response): Promise<void> {
  try {
    const data = req.body;
    const authServices = authService();
    const response = await authServices.register(data);
    res.cookie("token", response?.token, { httpOnly: true });
    res.status(200).send({ username: response?.username, _id: response?._id });
  } catch (error: any) {
    res.status(error.status).send(error);
  }
}

export async function loginUser(req: Request, res: Response): Promise<void> {
  try {
    const data = req.body;
    const authServices = authService();
    const response = await authServices.login(data);
    console.log(response.token);

    res
      .cookie("token", response?.token, { httpOnly: true })
      .status(200)
      .send({ username: response?.username, _id: response?._id });
  } catch (error: any) {
    res.status(error.status).send(error);
  }
}
