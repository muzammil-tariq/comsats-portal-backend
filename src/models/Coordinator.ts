import mongoose, { Schema } from "mongoose";
import { ICoordinator } from "../types";

const coordinatorSchema: mongoose.Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: { 
    type: String, 
    required: true 
},
});
const Coordinator = mongoose.model<ICoordinator>(
  "Coordinator",
  coordinatorSchema
);
export default Coordinator;
