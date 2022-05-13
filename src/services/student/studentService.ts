import { Student } from "../../models";
import { IStudent } from "../../types";
import { NotFound } from "../../utils/errors";

export const IsStudentExist = async (id: string) => {
  const student: IStudent | null = await Student.findById(id).exec();
  return !!student;
};

export const getStudent = async (id: string) => {
  const student: IStudent | null = await Student.findById(id).exec();
  if (!student) {
    throw new NotFound(`Student with id ${id} not found!`);
  }
  return student;
};

export const getAllStudents = async () => {
  const students: IStudent[] | null = await Student.find({}).exec();
  if (!students) {
    throw new NotFound(`No Students found!`);
  }
  return students;
};

export const  updateStudent = async (id: string, obj: any) => {
  const student: IStudent | null = await Student.findByIdAndUpdate(
    id,
    obj
  ).exec();
  if (!student) {
    throw new NotFound(`Student with id ${id} not found!`);
  }
  return student;
};

export const deleteStudent = async (id: string) => {
  const studentExists: boolean = await IsStudentExist(id);
  if (!studentExists) {
    throw new NotFound(`Student with id ${id} not found!`);
  }
  await Student.findByIdAndDelete(id).exec();
};
