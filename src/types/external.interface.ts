import { Document } from "mongoose";

export interface IExternal extends Document {
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  contact: string;
  affiliation: string;
  designation: string[];
  userId: string;
  image: string;
  password: string;
}
