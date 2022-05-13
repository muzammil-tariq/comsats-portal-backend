import mongoose, { Schema } from "mongoose";
import { IGrade } from "../types";

const gradeSchema: mongoose.Schema = new Schema({
  value: {
    type: Number,
    required: true,
  },
  evaluationId: {
    type: mongoose.Types.ObjectId,
    ref: "Evaluation",
    required: true,
  },
  studentId: {
    type: mongoose.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  deliverableId: {
    type: mongoose.Types.ObjectId,
    ref: "Deliverable",
    required: true,
  },
  weighage: {
    type: String,
    required: true,
  },
});
const Grade = mongoose.model<IGrade>("Grade", gradeSchema);
export default Grade;
