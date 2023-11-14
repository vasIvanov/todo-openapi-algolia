"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspacesService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class WorkspacesService {
    /**
     * Get all workspaces
     * @returns any A list of workspaces
     * @throws ApiError
     */
    static getWorkspaces() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static postWorkspace(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getWorkspace(workspaceId) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static inviteToWorkspace(workspaceId, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/workspaces/{workspaceId}/invite',
            path: {
                'workspaceId': workspaceId,
            },
            body: requestBody,
        });
    }
}
exports.WorkspacesService = WorkspacesService;
