import { Faculty } from "../../models";
import * as facultyService from "../../services/faculty/facultyService";
import { IFaculty } from "../../types";
import { BadRequest } from "../../utils/errors";

export const getFacultyProfile = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    const faculty: IFaculty = await facultyService.getFaculty(id);
    res.send({ message: `faculty successfully fetched!`, faculty });
  } catch (ex) {
    next(ex);
  }
};
export const updateFacultyProfile = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  const obj = req.body;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    const faculty: IFaculty = await facultyService.updateFaculty(id, obj);
    res.send({ message: `faculty successfully updated!`, faculty });
  } catch (ex) {
    next(ex);
  }
};
export const getAllFacultyProfile = async (req: any, res: any, next: any) => {
  try {
    const faculty: IFaculty[] = await facultyService.getAllFaculty();
    res.send({ message: `Faculty successfully fetched!`, faculty });
  } catch (ex) {
    next(ex);
  }
};
export const deleteFacultyProfile = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    await facultyService.deleteFaculty(id);
    res.send({ message: `Faculty successfully deleted!` });
  } catch (ex) {
    next(ex);
  }
};

export const uploadFacultyPhoto = async (req: any, res: any, next: any) => {
  console.log(req.user);
  console.log(req.file);
  //update on db
  const updateFaculty = await Faculty.findByIdAndUpdate(
    req.user.id,
    {
      $set: {
        profile: `${process.env.ROOT_PATH}/${req.file.filename}`,
      },
    },
    { new: true }
  );
  // console.log(updateFaculty);
  res.send({ updatedFaculty: updateFaculty });
};

