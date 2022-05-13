import { Document } from "mongoose";

export interface IStudentGroup extends Document{
    name:string;
    leaderId:string;
    projectId?:string;
    creationDate:Date;
    batchId:string;
}