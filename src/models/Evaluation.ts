import mongoose, { Schema } from "mongoose";
import { IEvaluation } from "../types";

const evaluationSchema: mongoose.Schema = new Schema({
  facultyId: {
    type: mongoose.Types.ObjectId,
    ref: "Faculty",
    required: true,
  },
  submissionId: {
    type: String,
    required: true,
  },
  evaluationDate: {
    type: Date,
    default: Date.now(),
  },
  recommendation: {
    type: String,
    required: true,
  },
});
const Evaluation = mongoose.model<IEvaluation>("Evaluation", evaluationSchema);
export default Evaluation;
