import mongoose, { Schema } from "mongoose";
import { IComplaint } from "../types/complaint.interface";

const complaintSchema: mongoose.Schema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  complainer: {
    type: String,
    required: true,
    index:true
  },
  categoryName: {
    type: String,
    required: true,
  },
  subcategoryName: {
    type: String,
    required: true,
  },
  nature: {
    type: String,
    required: true,
  },
  details: {
    type: String,
  },
  status: {
    type: String,
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
  },
 
 
});
const Complaint = mongoose.model<IComplaint>("Complaint", complaintSchema);
export default Complaint;
