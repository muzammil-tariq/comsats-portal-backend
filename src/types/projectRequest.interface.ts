import { Document } from "mongoose";

export interface IProjectRequest extends Document{
    groupId:string;
    status?:string;
    sendDate:string;
    projectId:string;
}