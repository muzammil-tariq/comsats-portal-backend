import { External } from "../../models";
import { IExternal } from "../../types";
import { NotFound } from "../../utils/errors";

export const IsExternalExist = async (id: string) => {
  const external: IExternal | null = await External.findById(id).exec();
  return !!external;
};

export const getExternal = async (id: string) => {
  const external: IExternal | null = await External.findById(id).exec();
  if (!external) {
    throw new NotFound(`external with id ${id} not found!`);
  }
  return external;
};

export const getAllExternal = async () => {
  const external: IExternal[] | null = await External.find({}).exec();
  if (!external) {
    throw new NotFound(`No external found!`);
  }
  return external;
};

export const updateExternal = async (id: string, obj: any) => {
  const external: IExternal | null = await External.findByIdAndUpdate(
    id,
    obj
  ).exec();
  if (!external) {
    throw new NotFound(`external with id ${id} not found!`);
  }
  return external;
};

export const deleteExternal = async (id: string) => {
  const externalExists: boolean = await IsExternalExist(id);
  if (!externalExists) {
    throw new NotFound(`external with id ${id} not found!`);
  }
  await External.findByIdAndDelete(id).exec();
};
