import { Document } from "mongoose";

export interface IDeliverable extends Document{
    batchId:string;
    title:string;
    outcome:string;
    deadline:Date;
    templateId:string;
    deliverableType:string;
    result:string;
    github:string;
    comment:string;
    recommendation:string;
    rubricId:string;
}