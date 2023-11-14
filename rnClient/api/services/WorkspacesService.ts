/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class WorkspacesService {

    /**
     * Get all workspaces
     * @returns any A list of workspaces
     * @throws ApiError
     */
    public static getWorkspaces(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces',
        });
    }

    /**
     * Create a new workspace
     * @param requestBody
     * @returns any Workspace created successfully
     * @throws ApiError
     */
    public static postWorkspace(
        requestBody: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces',
            body: requestBody,
        });
    }

    /**
     * Get workspace details by ID
     * @param workspaceId ID of the workspace
     * @returns any Workspace details
     * @throws ApiError
     */
    public static getWorkspace(
        workspaceId: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/workspaces/{workspaceId}',
            path: {
                'workspaceId': workspaceId,
            },
        });
    }

    /**
     * Invite a member to a workspace
     * @param workspaceId ID of the workspace
     * @param requestBody
     * @returns any Invitation sent successfully
     * @throws ApiError
     */
    public static inviteToWorkspace(
        workspaceId: string,
        requestBody: any,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/invite',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
        });
    }

}
