import { Student } from "../../models";
import * as studentService from "../../services/student/studentService";
import { BadRequest } from "../../utils/errors";
import { IStudent } from "../../types";

export const getStudentProfile = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    const student: IStudent = await studentService.getStudent(id);
    res.send({ message: `Student successfully fetched!`, student });
  } catch (ex) {
    next(ex);
  }
};
export const updateStudentProfile = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  console.log("Yess update is called");
  const obj = req.body;
  console.log("Yess body is sexy", obj);
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    const student: IStudent = await studentService.updateStudent(id, obj);
    res.send({ message: `Student successfully updated!`, student });
  } catch (ex) {
    next(ex);
  }
};
export const getAllStudentsProfile = async (req: any, res: any, next: any) => {
  try {
    const students = await studentService.getAllStudents();
    res.send({ message: `Students successfully fetched!`, students });
  } catch (ex) {
    next(ex);
  }
};
export const deleteStudentProfile = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    await studentService.deleteStudent(id);
    res.send({ message: `Student successfully deleted!` });
  } catch (ex) {
    next(ex);
  }
};

export const uploadStudentPhoto = async (req: any, res: any, next: any) => {
  console.log(req.user);
  console.log(req.file);
  //update on db
  const updateStudent = await Student.findByIdAndUpdate(
    req.user.id,
    {
      $set: {
        profile: `${process.env.ROOT_PATH}/${req.file.filename}`,
      },
    },
    { new: true }
  );
  console.log(updateStudent);
  res.send({ updateStudent: updateStudent });
};
