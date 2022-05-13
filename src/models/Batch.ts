import mongoose, { Schema } from "mongoose";
import { IBatch } from "../types";

const batchSchema: mongoose.Schema = new Schema({
  calenderId: {
    type: String,
    required: true,
  },
});
const Batch = mongoose.model<IBatch>("Batch", batchSchema);
export default Batch;
