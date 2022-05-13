import { Document } from "mongoose";

export interface IComplaint extends Document {
  userId: string;
  categoryName: string;
  subcategoryName: string;
  nature: string;
  details: string;
  status: string;
  image: string; 
  complainer:string;
  date : Date;
}
