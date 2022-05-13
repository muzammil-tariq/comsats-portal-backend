import mongoose, { Schema } from "mongoose";
import { IAdmin } from "../types";

const adminSchema: mongoose.Schema = new Schema({
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
const Admin = mongoose.model<IAdmin>(
  "Admin",
  adminSchema
);
export default Admin;
