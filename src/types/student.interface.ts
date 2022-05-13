import { Document } from "mongoose";

export interface IStudent extends Document {
  regNo: string;
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  userId: string;
  batch: string;
  group: number;
  grade: [];
  image: string;
  github: string;
  password: string;
}
