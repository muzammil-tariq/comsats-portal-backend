import { Document } from "mongoose";

interface IDetails extends Document{
    methodology:string;
    tools:string[];
    technology:string[];
    outcome:string;
    initiator:string;
}
export interface IProject extends Document{
    title:string;
    description:string;
    status:string;
    approval:string;
    changes?:string;
    facultyId:string;
    coFacultyId?:string;
    uploadDate:Date;
    details:IDetails;
}