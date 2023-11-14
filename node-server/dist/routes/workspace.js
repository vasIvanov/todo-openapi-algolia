"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_promise_router_1 = __importDefault(require("express-promise-router"));
const auth_1 = __importDefault(require("../middleware/auth"));
const workspacesController_1 = require("../controllers/workspacesController");
const workspacesRouter = (0, express_promise_router_1.default)();
workspacesRouter.get("/", auth_1.default, workspacesController_1.getWorkspaces);
workspacesRouter.get("/:id", auth_1.default, workspacesController_1.getWorkspaceById);
workspacesRouter.post("/:workspaceId/invite", auth_1.default, workspacesController_1.inviteToWorkspace);
workspacesRouter.post("/", auth_1.default, workspacesController_1.createWorkspace);
// workspaceRouter.post("/", verifyToken, createWorkspace);
// workspaceRouter.delete("/:id", verifyToken, deleteWorkspace);
exports.default = workspacesRouter;
