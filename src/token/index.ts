import jwt from 'jsonwebtoken';
import config from "../config";

export const generateAccessToken=(id:string)=> {
    // @ts-ignore
    return jwt.sign({id}, config.JWTSecret
      // , { expiresIn: '1800s' }
      );
  }