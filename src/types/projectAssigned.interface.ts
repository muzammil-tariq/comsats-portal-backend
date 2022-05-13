import { Document } from "mongoose";

export interface IProjectAssigned extends Document{
    projectId:string;
    facultyId:string;
    timeSlotId:string;
}