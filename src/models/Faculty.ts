import mongoose, { Schema } from "mongoose";
import { IFaculty } from "../types";

const facultySchema: mongoose.Schema = new Schema({
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
  designation: {
    type: String,
    enum: ["supervisor", "evaluator", "admin", "hod"],
  },
  title: {
    type: String,
  },  
  supervisorQuota: {
    type: Number,
  },
  contact: {
    type: String,
  },
  userId: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isCoordinator: {
    type: Boolean,
    default: false,
  },
  isEvaluator: {
    type: Boolean,
    default: false,
  },
  fypStage: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
    default: "",
  },
});
const Faculty = mongoose.model<IFaculty>("Faculty", facultySchema);
export default Faculty;
