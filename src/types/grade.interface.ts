import { Document } from "mongoose";

export interface IGrade extends Document{
    value:Number;
    evaluationId:string;
    studentId:string;
    deliverableId:string;
    weighage:string;
}