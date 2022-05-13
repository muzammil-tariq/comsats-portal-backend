import * as externalService from "../../services/external";
import { IExternal } from "../../types";
import { BadRequest } from "../../utils/errors";

export const getExternalProfile = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    const external: IExternal = await externalService.getExternal(id);
    res.send({ message: `External successfully fetched!`, external });
  } catch (ex) {
    next(ex);
  }
};
export const updateExternalProfile = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  const obj = req.body;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    const external: IExternal = await externalService.updateExternal(id, obj);
    res.send({ message: `External successfully updated!`, external });
  } catch (ex) {
    next(ex);
  }
};
export const getAllExternalProfile = async (req: any, res: any, next: any) => {
  try {
    const externals: IExternal[] = await externalService.getAllExternal();
    res.send({ message: `Externals successfully fetched!`, externals });
  } catch (ex) {
    next(ex);
  }
};
export const deleteExternalProfile = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    await externalService.deleteExternal(id);
    res.send({ message: `External successfully deleted!` });
  } catch (ex) {
    next(ex);
  }
};
