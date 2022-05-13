import mongoose, { Schema } from "mongoose";
import { IRubric } from "../types";

const rubricSchema: mongoose.Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now(),
  },
});
const Rubric = mongoose.model<IRubric>("Rubric", rubricSchema);
export default Rubric;
