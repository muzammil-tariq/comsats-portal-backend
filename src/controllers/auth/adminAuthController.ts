import { Student } from "../../models";
import * as adminAuthService from "../../services/auth/adminAuthService";
import { generateAccessToken } from "../../token";
import { IAdmin, IStudent } from "../../types";
import { RETURN_CODE } from "../../utils/constant";
import { BadRequest, NotFound } from "../../utils/errors";

export const registerAdmin = async (req: any, res: any, next: any) => {
  const createObj: IAdmin = req.body;
  try {
    if (!createObj.email || !createObj.password) {
      throw new NotFound("admin Credentials are not found!");
    }
    const admin = await adminAuthService.signUp(
      createObj.password,
      createObj
    );
    res.send({
      message: `admin registered!`,
      admin,
    });
  } catch (err) {
    next(err);
  }
};

export const loginAdmin= async (req: any, res: any, next: any) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    if (!email || !password) {
      throw new BadRequest("Missing required field: Email and Password");
    }
    const { token, admin } = await adminAuthService.login(email, password);
    res.send({ message: `admin Logged in!`, token, admin });
  } catch (ex) {
    next(ex);
  }
};
