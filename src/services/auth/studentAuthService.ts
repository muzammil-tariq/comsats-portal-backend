import crypto from "crypto";
import argon2 from "argon2";
import { Student } from "../../models";
import { generateAccessToken } from "../../token";
import config from "../../config";
import { IStudent } from "../../types";
import { InvalidPassword } from "../../utils/errors";
// import {jwt} from 'jsonwebtoken';

export const signUp = async (password: string, otherAttributes: {}) => {
  // validation
  //   if (!username || typeof username !== "string") {
  //     return res.json({ status: "error", error: "Invalid username" });
  //   }
  //   if (!password || typeof password !== "string") {
  //     return res.json({ status: "error", error: "Invalid password" });
  //   }
  //   if (password.length < 5) {
  //     return res.json({ status: "error", error: "Password length too short" });
  //   }
  /* Hashing Password to save in Database */
  const salt = crypto.randomBytes(32);
  const passwordHashed = await argon2.hash(password, { salt });
  const userObj = {
    ...otherAttributes,
    password: passwordHashed,
    salt: salt.toString("hex"),
  };
  const student = await Student.create(userObj);
  return student;
};

export const login = async (email: string, password: string) => {
  const student: IStudent = await Student.findOne({ email }).lean();
  /* Verifying Password */
  const correctPassword = await argon2.verify(student.password, password);
  if (!correctPassword) {
    throw new InvalidPassword("Invalid Password");
  }
  const token = generateAccessToken(student._id);
  return { token, student };
};

export const changePassword = async (password: string, token: string) => {
  // validation
  //  if (!password || typeof password !== "string") {
  //     return res.json({ status: "error", error: "Invalid password" });
  //   }
  //   if (password.length < 5) {
  //     return res.json({ status: "error", error: "Password length too short" });
  //   }
  //   verify user with JWT
  //   const user = jwt.verify(token, JWT_SECRET);
  let id;
  //   if (user) {
  //     // @ts-ignore
  //     id = user.id;
  //   }
  //  /* Hashing Password to save in Database */
  const salt = crypto.randomBytes(32);
  const passwordHashed = await argon2.hash(password, { salt });
  const updatedObj = {
    password: passwordHashed,
    salt: salt.toString("hex"),
  };
  await Student.findByIdAndUpdate(id, {
    $set: {
      password: passwordHashed,
      salt: salt.toString("hex"),
    },
  });
};
