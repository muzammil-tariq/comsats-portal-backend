import * as facultyAuthService from "../../services/auth/facultyAuthService";
import { generateAccessToken } from "../../token";
import { IFaculty } from "../../types/faculty.interface";
import { RETURN_CODE } from "../../utils/constant";
import { BadRequest, NotFound } from "../../utils/errors";

export const registerFaculty = async (req: any, res: any, next: any) => {
  const facultyObj: IFaculty = req.body;
  try {
    if (!facultyObj.email || !facultyObj.password) {
      throw new NotFound("faculty Credentials are not found!");
    }
    const faculty = await facultyAuthService.signUp(
      facultyObj.password,
      facultyObj
    );
    res.send({
      message: `faculty registered!`,
      faculty,
    });
  } catch (err) {
    next(err);
  }
};

export const loginFaculty = async (req: any, res: any, next: any) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    if (!email || !password) {
      throw new BadRequest("Missing required field: Email and Password");
    }
    const { token, faculty } = await facultyAuthService.login(email, password);
    res.send({ message: `faculty Logged in!`, token, faculty });
  } catch (ex) {
    next(ex);
  }
};
