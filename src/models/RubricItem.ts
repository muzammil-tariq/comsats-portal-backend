import mongoose, { Schema } from "mongoose";
import { IRubricItem } from "../types";

const rubricItemSchema: mongoose.Schema = new Schema({
  description: {
    type: String,
    required: true,
  },
  score: {
    type: String,
    required: true,
  },
  rubricId: {
    type: mongoose.Types.ObjectId,
    ref: "Rubric",
    required: true,
  },
});
const RubricItem = mongoose.model<IRubricItem>("RubricItem", rubricItemSchema);
export default RubricItem;
