"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const todoController_1 = require("../controllers/todoController");
const auth_1 = __importDefault(require("../middleware/auth"));
const todoRouter = (0, express_promise_router_1.default)();
todoRouter.get("/", auth_1.default, todoController_1.getTodos);
todoRouter.post("/", auth_1.default, todoController_1.createTodo);
todoRouter.delete("/:id", auth_1.default, todoController_1.deleteTodo);
exports.default = todoRouter;
