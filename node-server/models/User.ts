import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  password: { type: String, require: true },
  token: { type: String },
});

export const Schema = model("User", userSchema);
