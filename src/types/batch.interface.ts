import { Document } from "mongoose";

export interface IBatch extends Document{
    calenderId:string;
}