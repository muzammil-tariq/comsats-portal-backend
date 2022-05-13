import mongoose, { Schema } from "mongoose";
import { IComment, IStudentGroup } from "../types";

const commentSchema: mongoose.Schema = new Schema({
  commentType: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  addDate: {
    type: Date,
    default: Date.now(),
  },
  evaluatorId: {
    type: mongoose.Types.ObjectId,
    ref: "Evaluator",
  },
});
const Comment = mongoose.model<IComment>("Comment", commentSchema);
export default Comment;
