import crypto from "crypto";
import argon2 from "argon2";
import { generateAccessToken } from "../../token";
import config from "../../config";
import { InvalidPassword } from "../../utils/errors";
import Admin from "../../models/Admin";
import { IAdmin } from "../../types";
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
  const admin = await Admin.create(userObj);
  return admin;
};

export const login = async (email: string, password: string) => {
  const admin: IAdmin = await Admin.findOne({ email }).lean();
  /* Verifying Password */
  const correctPassword = await argon2.verify(admin.password, password);
  if (!correctPassword) {
    throw new InvalidPassword("Invalid Password");
  }
  const token = generateAccessToken(admin._id);
  return { token, admin };
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
  await Admin.findByIdAndUpdate(id, {
    $set: {
      password: passwordHashed,
      salt: salt.toString("hex"),
    },
  });
};
