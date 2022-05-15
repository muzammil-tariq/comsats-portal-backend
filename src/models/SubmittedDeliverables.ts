import mongoose, { Schema } from "mongoose";
import { IDeliverable } from "../types";
const rubricsSchema: mongoose.Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
    obtained_score: {
      type: Number,
      default: 0,
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
  rubrics: {
    type: [rubricsSchema],
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
  student_ID: {
    type: Schema.Types.ObjectId,
    Ref: "Student",
  },
  faculty_id: {
    type: Schema.Types.ObjectId,
    ref: "Faculty",
  },
  comments: { type: String, require: false, default: "" },
  markedObtain: { type: Boolean, require: false, default: false },
});

const Submitterd_deliverable = mongoose.model<IDeliverable>(
  "Submitterd_deliverable",
  deliverableSchema
);
export default Submitterd_deliverable;
