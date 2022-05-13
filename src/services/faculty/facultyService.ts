import { Faculty } from "../../models";
import { IFaculty } from "../../types";
import { NotFound } from "../../utils/errors";

export const IsFacultyExist = async (id: string) => {
  const faculty: IFaculty | null = await Faculty.findById(id).exec();
  return !!faculty;
};

export const getFaculty = async (id: string) => {
  const faculty: IFaculty | null = await Faculty.findById(id).exec();
  if (!faculty) {
    throw new NotFound(`Faculty with id ${id} not found!`);
  }
  return faculty;
};

export const getAllFaculty = async () => {
  const faculty: IFaculty[] | null = await Faculty.find({}).exec();
  if (!faculty) {
    throw new NotFound(`No faculty found!`);
  }
  return faculty;
};

export const updateFaculty = async (id: string, obj: any) => {
  const faculty: IFaculty | null = await Faculty.findByIdAndUpdate(
    id,
    obj
  ).exec();
  if (!faculty) {
    throw new NotFound(`faculty with id ${id} not found!`);
  }
  return faculty;
};

export const deleteFaculty = async (id: string) => {
  const facultyExists: boolean = await IsFacultyExist(id);
  if (!facultyExists) {
    throw new NotFound(`faculty with id ${id} not found!`);
  }
  await Faculty.findByIdAndDelete(id).exec();
};
