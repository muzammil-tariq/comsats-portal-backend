import { Document } from "mongoose";

export interface IRubric extends Document{
    title:string;
    creationDate:Date;
}
export interface IRubricItem extends Document{
    description:Date;
    score:string;
    rubricId:string;
}