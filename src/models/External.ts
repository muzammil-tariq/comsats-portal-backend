import mongoose, { Schema } from "mongoose";
import { IExternal } from "../types";

const externalSchema: mongoose.Schema = new Schema({
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
  title: {
    type: String,
  },
  contact: {
    type: String,
  },
  affiliation: {
    type: String,
  },
  designation: {
    type: String,
    enum: ["supervisor", "evaluator", "admin", "hod"],
  },
  userId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
});
const External = mongoose.model<IExternal>("External", externalSchema);
export default External;
