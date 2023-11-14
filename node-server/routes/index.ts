import { Express, Request, Response } from "express";
import todoRouter from "./todo";
import healthRouter from "./health";
import authRouter from "./auth";
import workspacesRouter from "./workspace";

const routes = (app: Express) => {
  app.use("/health", healthRouter);

  app.use("/todos", todoRouter);
  app.use("/auth", authRouter);

  app.use("/workspaces", workspacesRouter);

  app.use((req: Request, res: Response) => {
    res.status(404).send("404 not found");
  });
};

export default routes;
