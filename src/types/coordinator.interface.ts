import { Document } from "mongoose";

export interface ICoordinator extends Document{
    name:string;
    email:string;
    password:string;
}