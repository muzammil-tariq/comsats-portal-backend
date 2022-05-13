import mongoose, { Schema } from "mongoose";
import { IMeeting } from "../types";

const meetingSchema: mongoose.Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  addDate: {
    type: Date,
    default: Date.now(),
  },
  meetingDate: {
    type: Date,
    default: Date.now(),
  },
  projectId: {
    type: mongoose.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});
const Meeting = mongoose.model<IMeeting>("Meeting", meetingSchema);
export default Meeting;
