import { Document } from "mongoose";

export interface IEvaluation extends Document{
    facultyId:string;
    submissionId:string;
    evaluationDate:Date;
    recommendation:string;
}