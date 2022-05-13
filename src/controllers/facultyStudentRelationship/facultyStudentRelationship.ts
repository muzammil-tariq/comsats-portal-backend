import { Faculty, FacultyStudentRelationship, Student } from "../../models";
import { BadRequest } from "../../utils/errors";
import { NotFound } from "../../utils/errors";

export const createFacultyStudentRelationship = async (
  req: any,
  res: any,
  next: any
) => {
  const { body } = req;
  try {
    const data = [];
    for (var i = 0; i < body.length; i++) {
      const lastRelationship = await FacultyStudentRelationship.findOne({
        faculty: body[i].faculty,
        student: body[i].student,
      });
      if (!lastRelationship) data.push(body[i]);
    }
    if (data.length > 0) {
      const facultyStudentRelationship =
        await FacultyStudentRelationship.insertMany(data);
      res.status(200).send({
        data: facultyStudentRelationship,
        message: `Deliverable successfully Submitted!`,
      });
    } else
      res.status(400).send({
        data: null,
        message: `Relation Already Found`,
      });
  } catch (error) {
    next(error);
  }
};

export const getFacultyStudentRelationship = async (
  req: any,
  res: any,
  next: any
) => {
  try {
    const {
      params: { id },
    } = req;
    const data = await FacultyStudentRelationship.find({
      faculty: id,
    })
      .populate("student")
      .populate("faculty");
    res.status(200).send(data);
  } catch (error) {
    next(error);
  }
};
export const deleteFacultyStudentRelationship = async (
  req: any,
  res: any,
  next: any
) => {
  try {
    const {
      params: { id },
      body,
    } = req;
    const dataReq: any[] = [];
    const faculty = await Faculty.findOne({
      _id: id,
    });
    if (!faculty) return res.status(404).send({ message: "Faculty Not Found" });
    for (var i = 0; i < body.length; i++) {
      const student = await Student.findOne({
        _id: body[i],
      });
      const dataPrev = await FacultyStudentRelationship.findOne({
        student: body[i],
        faculty: id,
      });
      if (dataPrev || student) dataReq.push(body[i]);
    }
    if (dataReq.length > 0) {
      await FacultyStudentRelationship.deleteMany({
        faculty: id,
        student: { $in: dataReq },
      });
      res.status(200).send({
        message: "success",
      });
    } else
      res.status(404).send({
        message: "Student Not Found",
      });
  } catch (error) {
    next(error);
  }
};
