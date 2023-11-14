// workspace.js
import mongoose from "mongoose";

const workspaceSchema = new mongoose.Schema({
  name: String,
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

export const Workspace = mongoose.model("Workspace", workspaceSchema);
