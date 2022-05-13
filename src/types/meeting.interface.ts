import { Document } from "mongoose";

export interface IMeeting extends Document{
    title:string;
    addDate:Date;
    meetingDate:Date;
    projectId:string;
}