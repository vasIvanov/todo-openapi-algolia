import Router from "express-promise-router";

import verifyToken from "../middleware/auth";
import {
  createWorkspace,
  getWorkspaceById,
  getWorkspaces,
  inviteToWorkspace,
} from "../controllers/workspacesController";

const workspacesRouter = Router();
workspacesRouter.get("/", verifyToken, getWorkspaces);

workspacesRouter.get("/:id", verifyToken, getWorkspaceById);
workspacesRouter.post("/:workspaceId/invite", verifyToken, inviteToWorkspace);

workspacesRouter.post("/", verifyToken, createWorkspace);

// workspaceRouter.post("/", verifyToken, createWorkspace);

// workspaceRouter.delete("/:id", verifyToken, deleteWorkspace);

export default workspacesRouter;
