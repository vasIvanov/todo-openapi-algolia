import { Request, Response } from "express";
import { todoService } from "../services/todoService";
import { workspacesService } from "../services/workspacesService";

type ExtendedRequest = Request & Record<string, any>;

export async function getWorkspaces(
  req: ExtendedRequest,
  res: Response
): Promise<void> {
  try {
    const { user } = req;
    console.log(user);

    const workspacesServices = workspacesService();
    const response = await workspacesServices.getWorkspaces(user.id);

    res.status(200).send(response);
  } catch (error: any) {
    res.status(error.status).send(error);
  }
}

export async function createWorkspace(
  req: ExtendedRequest,
  res: Response
): Promise<void> {
  try {
    const data = req.body;
    const user = req.user;
    const workspacesServices = workspacesService();
    const response = await workspacesServices.createWorkspace({
      ...data,
      members: [user.id],
    });

    res.status(200).send({ data: response });
  } catch (error: any) {
    res.status(error.status).send(error);
  }
}

export async function inviteToWorkspace(req: ExtendedRequest, res: Response) {
  try {
    const { body, params } = req;
    console.log(params.workspaceId, body.memberId);
    const workspacesServices = workspacesService();

    const response = await workspacesServices.inviteToWorkspace(
      params.workspaceId,
      body.memberId
    );

    res.status(200).send({ data: response });
  } catch (error: any) {
    res.status(error.status).send(error);
  }
}

export async function getWorkspaceById(req: ExtendedRequest, res: Response) {
  try {
    const { params } = req;
    const workspacesServices = workspacesService();

    const response = await workspacesServices.getWorkspaceById(params.id);

    res.status(200).send({ data: response });
  } catch (error: any) {
    res.status(error.status).send(error);
  }
}
