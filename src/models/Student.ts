import mongoose, { Schema } from "mongoose";
import { IStudent } from "../types";

const studentSchema: mongoose.Schema = new Schema({
  regNo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
  },
  userId: {
    type: Number,
  },
  batch: {
    type: Number,
  },
  group: {
    type: Number,
  },
  grade: [
    {
      fyp1: {
        type: Number,
        default: 0,
      },
    },
    {
      fyp2: {
        type: Number,
        default: 0,
      },
    },
  ],
  image: {
    type: String,
  },
  github: {
    type: String,
  },
  linkedIn: {
    type: String,
  },
  website: {
    type: String,
  },
  twitter: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    default: "",
  },
  salt: { type: String, required: true },
});
const Student = mongoose.model<IStudent>("Student", studentSchema);
export default Student;