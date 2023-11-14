"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = __importDefault(require("./todo"));
const health_1 = __importDefault(require("./health"));
const auth_1 = __importDefault(require("./auth"));
const workspace_1 = __importDefault(require("./workspace"));
const routes = (app) => {
    app.use("/health", health_1.default);
    app.use("/todos", todo_1.default);
    app.use("/auth", auth_1.default);
    app.use("/workspaces", workspace_1.default);
    app.use((req, res) => {
        res.status(404).send("404 not found");
    });
};
exports.default = routes;
