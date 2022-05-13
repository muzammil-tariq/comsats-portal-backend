import { Document } from "mongoose";

export interface IComment extends Document{
    commentType:string;
    description:string;
    addDate:Date;
    evaluatorId:string;
}