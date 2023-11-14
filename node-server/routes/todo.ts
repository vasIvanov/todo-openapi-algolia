import Router from "express-promise-router";
import {
  createTodo,
  deleteTodo,
  getTodos,
} from "../controllers/todoController";
import verifyToken from "../middleware/auth";

const todoRouter = Router();

todoRouter.get("/", verifyToken, getTodos);

todoRouter.post("/", verifyToken, createTodo);

todoRouter.delete("/:id", verifyToken, deleteTodo);

export default todoRouter;
