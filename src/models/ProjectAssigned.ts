import mongoose, { Schema } from "mongoose";
import { IProjectAssigned } from "../types";

const projectAssignedSchema: mongoose.Schema = new Schema({
  projectId: {
    type: mongoose.Types.ObjectId,
    ref: "Project",
    required: true,
  },
  facultyId: {
    type: mongoose.Types.ObjectId,
    ref: "Faculty",
    required: true,
  },
  timeSlotId: {
    type: String
  },
});

const ProjectAssigned = mongoose.model<IProjectAssigned>("ProjectAssigned", projectAssignedSchema);
export default ProjectAssigned;
