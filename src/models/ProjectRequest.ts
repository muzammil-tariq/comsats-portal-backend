import mongoose, { Schema } from "mongoose";
import { IProjectRequest } from "../types";

const projectRequestSchema: mongoose.Schema = new Schema({
  groupId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
  sendDate: {
    type: Date,
    required: true,
  },
  projectId: {
    type: mongoose.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

const ProjectRequest = mongoose.model<IProjectRequest>("ProjectRequest", projectRequestSchema);
export default ProjectRequest;
