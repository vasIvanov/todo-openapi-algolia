"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.createTodo = exports.getTodos = void 0;
const todoService_1 = require("../services/todoService");
function getTodos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { user } = req;
            console.log(user);
            const todoServices = (0, todoService_1.todoService)();
            const response = yield todoServices.getTodos(user.id);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(error.status).send(error);
        }
    });
}
exports.getTodos = getTodos;
function createTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const todoServices = (0, todoService_1.todoService)();
            const response = yield todoServices.createTodo(data);
            res.status(200).send({ data: response });
        }
        catch (error) {
            res.status(error.status).send(error);
        }
    });
}
exports.createTodo = createTodo;
function deleteTodo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const todoServices = (0, todoService_1.todoService)();
            const response = yield todoServices.deleteTodo(Number(req.params.id));
            res.status(200).send({ data: response });
        }
        catch (error) {
            res.status(error.status).send(error);
        }
    });
}
exports.deleteTodo = deleteTodo;
