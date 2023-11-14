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
exports.getWorkspaceById = exports.inviteToWorkspace = exports.createWorkspace = exports.getWorkspaces = void 0;
const workspacesService_1 = require("../services/workspacesService");
function getWorkspaces(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { user } = req;
            console.log(user);
            const workspacesServices = (0, workspacesService_1.workspacesService)();
            const response = yield workspacesServices.getWorkspaces(user.id);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(error.status).send(error);
        }
    });
}
exports.getWorkspaces = getWorkspaces;
function createWorkspace(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const user = req.user;
            const workspacesServices = (0, workspacesService_1.workspacesService)();
            const response = yield workspacesServices.createWorkspace(Object.assign(Object.assign({}, data), { members: [user.id] }));
            res.status(200).send({ data: response });
        }
        catch (error) {
            res.status(error.status).send(error);
        }
    });
}
exports.createWorkspace = createWorkspace;
function inviteToWorkspace(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { body, params } = req;
            console.log(params.workspaceId, body.memberId);
            const workspacesServices = (0, workspacesService_1.workspacesService)();
            const response = yield workspacesServices.inviteToWorkspace(params.workspaceId, body.memberId);
            res.status(200).send({ data: response });
        }
        catch (error) {
            res.status(error.status).send(error);
        }
    });
}
exports.inviteToWorkspace = inviteToWorkspace;
function getWorkspaceById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { params } = req;
            const workspacesServices = (0, workspacesService_1.workspacesService)();
            const response = yield workspacesServices.getWorkspaceById(params.id);
            res.status(200).send({ data: response });
        }
        catch (error) {
            res.status(error.status).send(error);
        }
    });
}
exports.getWorkspaceById = getWorkspaceById;
