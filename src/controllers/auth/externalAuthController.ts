import * as externalAuthService from "../../services/auth/externalAuthService";
import { generateAccessToken } from "../../token";
import { IExternal } from "../../types/external.interface";
import { RETURN_CODE } from "../../utils/constant";
import { BadRequest, NotFound } from "../../utils/errors";

export const registerExternal = async (req: any, res: any, next: any) => {
  const externalObj: IExternal = req.body;
  try {
    if (!externalObj.email || !externalObj.password) {
      throw new NotFound("external Credentials are not found!");
    }
    const external = await externalAuthService.signUp(
      externalObj.password,
      externalObj
    );
    res.send({
      message: `External registered!`,
      external,
    });
  } catch (err) {
    next(err);
  }
};

export const loginExternal = async (req: any, res: any, next: any) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    if (!email || !password) {
      throw new BadRequest("Missing required field: Email and Password");
    }
    const { token, external } = await externalAuthService.login(email, password);
    res.send({ message: `External Logged in!`, token, external });
  } catch (ex) {
    next(ex);
  }
};
