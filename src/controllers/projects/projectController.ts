import * as projectsService from "../../services/projects/projectsService";
import { BadRequest } from "../../utils/errors";

export const getStudentProject = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    const project = await projectsService.getProject(id);
    res.send({ message: `Project successfully fetched!`, project });
  } catch (ex) {
    next(ex);
  }
};

export const getAllStudentProjects = async (req: any, res: any, next: any) => {
  try {
    const projects = await projectsService.getAllProjects();
    res.send({ message: `Projects successfully fetched!`, projects });
  } catch (ex) {
    next(ex);
  }
};

export const updateStudentProject = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  const obj = req.body;
  try {
    if (!id || !obj) {
      throw new BadRequest("Missing required field: id and updated fields");
    }
    const project = await projectsService.updateProject(id, obj);
    res.send({ message: `Project successfully updated!`, project });
  } catch (ex) {
    next(ex);
  }
};

export const deleteStudentProject = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    await projectsService.deleteProject(id);
    res.send({ message: `Project successfully deleted!` });
  } catch (ex) {
    next(ex);
  }
};

export const createStudentProject = async (req: any, res: any, next: any) => {
  const obj = req.body;
  try {
    if (!obj) {
      throw new BadRequest("Missing required field for project creation!");
    }
    const project = await projectsService.create(obj);
    res.send({ message: `Project successfully created!`, project });
  } catch (ex) {
    next(ex);
  }
};

export const applyStudentProject = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  const {studentId} = req.body;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    const project = await projectsService.applyProject(id,studentId);
    res.send({ message: `Applied for Project successfully!`, project });
  } catch (ex) {
    next(ex);
  }
};

export const proposeStudentProject = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    const project = await projectsService.proposeProject(id);
    res.send({ message: `Project successfully proposed!`, project });
  } catch (ex) {
    next(ex);
  }
};
