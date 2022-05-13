import mongoose, { Schema } from "mongoose";
import { IDeliverable } from "../types";
const studentSchema: mongoose.Schema = new Schema(
  {
    student_id: {
      type: Schema.Types.ObjectId,
      ref: "Student",
    },
    filePath: {
      type: String,
    },
    obtainedRubrics: {
      type: Array,
    },
  },
  { timestamps: true }
);
const deliverableSchema: mongoose.Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  totalRubrics: {
    type: Array,
    required: true,
  },
  completedAssignments: {
    type: [studentSchema],
    required: false,
  },
});
const Deliverable = mongoose.model<IDeliverable>(
  "Deliverable",
  deliverableSchema
);
export default Deliverable;
