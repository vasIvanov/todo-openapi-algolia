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
exports.workspacesService = void 0;
const utils_1 = require("./utils");
const Workspace_1 = require("../models/Workspace");
const workspacesService = () => {
    const getWorkspaces = (userId) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield Workspace_1.Workspace.find({ members: userId });
            return result;
        }
        catch (e) {
            (0, utils_1.createServiceError)(e);
        }
    });
    const createWorkspace = (data) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const workspace = new Workspace_1.Workspace(data);
            const result = yield workspace.save();
            return result;
        }
        catch (e) {
            (0, utils_1.createServiceError)(e);
        }
    });
    const inviteToWorkspace = (workspaceId, memberId) => __awaiter(void 0, void 0, void 0, function* () {
        //TODO replace with sending invitation to email. And implement /accept-invitation endpoint
        try {
            const result = yield Workspace_1.Workspace.findByIdAndUpdate(workspaceId, {
                $push: { members: memberId },
            });
            return result;
        }
        catch (e) {
            (0, utils_1.createServiceError)(e);
        }
    });
    const getWorkspaceById = (id) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const result = yield Workspace_1.Workspace.findById(id);
            return result;
        }
        catch (e) {
            (0, utils_1.createServiceError)(e);
        }
    });
    return {
        createWorkspace,
        getWorkspaces,
        inviteToWorkspace,
        getWorkspaceById,
    };
};
exports.workspacesService = workspacesService;
