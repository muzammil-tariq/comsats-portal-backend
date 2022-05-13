import { FacultyStudentRelationship } from "../../models";
import { BadRequest } from "../../utils/errors";
import { NotFound } from "../../utils/errors";

export const createFacultyStudentRelationship = async (
  req: any,
  res: any,
  next: any
) => {
  const { body } = req;
  try {
    const facultyStudentRelationship =
      await FacultyStudentRelationship.insertMany(body);
    res.status(200).send({
      data: facultyStudentRelationship,
      message: `Deliverable successfully Submitted!`,
    });
  } catch (error) {
    res.send(error);
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
      facultyId: id,
    })
      .populate("student")
      .populate("faculty");
    res.status(200).send(data);
  } catch (error) {
    res.send(error);
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
    body.forEach((el: any) => {
      dataReq.push({
        student: el,
        faculty: id,
      });
    });
    const data = await FacultyStudentRelationship.deleteMany({
      faculty: id,
      student: { $in: body },
    });
    res.status(200).send({
      message: "success",
    });
  } catch (error) {
    res.send(error);
  }
};
export const getAssignment = async (req: any, res: any, next: any) => {
  try {
    const {
      body: { studentId, facultyId },
      body,
    } = req;
    const relationship = await FacultyStudentRelationship.findOne({
      faculty: facultyId,
      student: studentId,
    });
    if (!relationship)
      res.status(200).send({
        data: [],
        message: "success",
      });
    else {
    }
  } catch (error) {
    res.send(error);
  }
};
