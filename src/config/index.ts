import * as dotenv from "dotenv";
import jwt from 'jsonwebtoken';

// config() will read your .env file, parse the contents, assign it to process.env.
const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";
// string | undefined
const db: string | undefined = process.env.DATABASE_URI;
const JWTSecret = process.env.JWT_SECRET;
export default {
  port: process.env.PORT,
  databaseURL: process.env.DATABASE_URI,
  JWTSecret
};
