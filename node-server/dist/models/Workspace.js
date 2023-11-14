"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workspace = void 0;
// workspace.js
const mongoose_1 = __importDefault(require("mongoose"));
const workspaceSchema = new mongoose_1.default.Schema({
    name: String,
    members: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "User" }],
});
exports.Workspace = mongoose_1.default.model("Workspace", workspaceSchema);
