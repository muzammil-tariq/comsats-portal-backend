import mongoose, { Schema } from "mongoose";
import { IStudentGroup } from "../types";

const studentGroupSchema: mongoose.Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  // by default who creates it
  leaderId: {
    type: mongoose.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  batchId: {
    type: String,
    // required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
  projectId: {
    type: mongoose.Types.ObjectId,
    ref: "Project",
    // required: true,
  },
  students: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Student",
    },
  ],
  // student requests->accept/reject
  // student invite->accept/reject
  requests: [
    {
      student: { type: mongoose.Types.ObjectId, ref: "Student" },
    },
    {
      status: {
        type: String,
        enum: ["pending", "accept", "reject"],
        default: "pending",
      },
    },
  ],
  invites: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Student",
    },
    {
      status: {
        type: String,
        enum: ["pending", "accept", "reject"],
        default: "pending",
      },
    },
  ],
});
const StudentGroup = mongoose.model<IStudentGroup>(
  "StudentGroup",
  studentGroupSchema
);
export default StudentGroup;
