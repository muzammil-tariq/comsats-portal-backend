import mongoose, { Schema } from "mongoose";
import { IProject } from "../types";

const projectSchema: mongoose.Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["available", "notAvailable"],
  },
  approval: {
    type: String,
    // required: true,
  },
  changes: {
    type: String,
  },
  user: {
    type: String,
    required: true,
    enum: ["student", "faculty"],
  },
  facultyId: {
    type: mongoose.Types.ObjectId,
    ref: "Faculty",
    // required: true,
  },
  coFacultyId: {
    type: mongoose.Types.ObjectId,
    ref: "Faculty",
  },
  uploadDate: {
    type: Date,
    default: Date.now(),
    // required: true,
  },
  details: {
    methodology: {
      type: String,
      // required: true,
    },
    tools: {
      type: [String],
      // required: true,
    },
    technology: {
      type: [String],
      // required: true,
    },
    outcome: {
      type: Number,
      // required: true,
    },
    initiator: {
      type: String,
      // required: true,
    },
  },
  // group: {
  //   groupId: {
  //     type: mongoose.Types.ObjectId,
  //     ref: "StudentGroup",
  //   },
  //   students: [
  //     {
  //       type: mongoose.Types.ObjectId,
  //       ref: "Student",
  //     },
  //   ],
  // },
  // request

  // students
  // group
});

const Project = mongoose.model<IProject>("Project", projectSchema);
export default Project;
