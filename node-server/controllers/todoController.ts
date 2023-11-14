import { Request, Response } from "express";
import { todoService } from "../services/todoService";

type ExtendedRequest = Request & Record<string, any>;

export async function getTodos(
  req: ExtendedRequest,
  res: Response
): Promise<void> {
  try {
    const { user } = req;
    console.log(user);

    const todoServices = todoService();
    const response = await todoServices.getTodos(user.id);

    res.status(200).send(response);
  } catch (error: any) {
    res.status(error.status).send(error);
  }
}

export async function createTodo(req: Request, res: Response): Promise<void> {
  try {
    const data = req.body;

    const todoServices = todoService();
    const response = await todoServices.createTodo(data);

    res.status(200).send({ data: response });
  } catch (error: any) {
    res.status(error.status).send(error);
  }
}

export async function deleteTodo(req: Request, res: Response): Promise<void> {
  try {
    const todoServices = todoService();
    const response = await todoServices.deleteTodo(Number(req.params.id));

    res.status(200).send({ data: response });
  } catch (error: any) {
    res.status(error.status).send(error);
  }
}
