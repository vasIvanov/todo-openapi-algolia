import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    userId: String,
  },
  { timestamps: true }
);

export const Schema = mongoose.model("TodoSchema", TodoSchema);
