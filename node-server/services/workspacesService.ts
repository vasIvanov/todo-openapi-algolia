import { createServiceError } from "./utils";
import { Workspace } from "../models/Workspace";

export const workspacesService = () => {
  const getWorkspaces = async (userId: string) => {
    try {
      const result = await Workspace.find({ members: userId });

      return result;
    } catch (e: unknown) {
      createServiceError(e);
    }
  };

  const createWorkspace = async (data: any) => {
    try {
      const workspace = new Workspace(data);

      const result = await workspace.save();

      return result;
    } catch (e: unknown) {
      createServiceError(e);
    }
  };

  const inviteToWorkspace = async (workspaceId: string, memberId: string) => {
    //TODO replace with sending invitation to email. And implement /accept-invitation endpoint
    try {
      const result = await Workspace.findByIdAndUpdate(workspaceId, {
        $push: { members: memberId },
      });

      return result;
    } catch (e: unknown) {
      createServiceError(e);
    }
  };

  const getWorkspaceById = async (id: string) => {
    try {
      const result = await Workspace.findById(id);

      return result;
    } catch (e: unknown) {
      createServiceError(e);
    }
  };
  return {
    createWorkspace,
    getWorkspaces,
    inviteToWorkspace,
    getWorkspaceById,
  };
};
