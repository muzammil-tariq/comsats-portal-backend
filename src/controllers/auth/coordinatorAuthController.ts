import { Student } from "../../models";
import * as coordinatorAuthService from "../../services/auth/coordinatorAuthService";
import { generateAccessToken } from "../../token";
import { ICoordinator, IStudent } from "../../types";
import { RETURN_CODE } from "../../utils/constant";
import { BadRequest, NotFound } from "../../utils/errors";

export const registerCoordinator = async (req: any, res: any, next: any) => {
  const createObj: ICoordinator = req.body;
  try {
    if (!createObj.email || !createObj.password) {
      throw new NotFound("Coordinator Credentials are not found!");
    }
    const coordinator = await coordinatorAuthService.signUp(
      createObj.password,
      createObj
    );
    res.send({
      message: `coordinator registered!`,
      coordinator,
    });
  } catch (err) {
    next(err);
  }
};

export const loginCoordinator= async (req: any, res: any, next: any) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    if (!email || !password) {
      throw new BadRequest("Missing required field: Email and Password");
    }
    const { token, coordinator } = await coordinatorAuthService.login(email, password);
    res.send({ message: `Coordinator Logged in!`, token, coordinator });
  } catch (ex) {
    next(ex);
  }
};
