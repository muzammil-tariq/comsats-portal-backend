
import { Project } from "../../models";
import { IProject } from "../../types";
import { NotFound } from "../../utils/errors";

export const IsProjectExist = async (id: string) => {
  const project: IProject | null = await Project.findById(id).exec();
  return !!project;
};
export const create = async (obj: any) => {
    const project: IProject | null = await Project.create(obj);
    if (!project) {
      throw new NotFound(`project is not created!`);
    }
    return project;
  };
export const getProject = async (id: string) => {
  const project: IProject | null = await Project.findById(id).exec();
  if (!project) {
    throw new NotFound(`project with id ${id} not found!`);
  }
  return project;
};

export const getAllProjects = async () => {
  const projects: IProject[] | null = await Project.find({}).exec();
  if (!projects) {
    throw new NotFound(`No project found!`);
  }
  return projects;
};

export const updateProject = async (id: string, obj: any) => {
  const project: IProject | null = await Project.findByIdAndUpdate(
    id,
    obj
  ).exec();
  if (!project) {
    throw new NotFound(`project with id ${id} not found!`);
  }
  return project;
};

export const deleteProject = async (id: string) => {
  const projectExists: boolean = await IsProjectExist(id);
  if (!projectExists) {
    throw new NotFound(`project with id ${id} not found!`);
  }
  await Project.findByIdAndDelete(id).exec();
};

export const applyProject = async (id: string,studentId:string) => {
  const projectExists: boolean = await IsProjectExist(id);
  if (!projectExists) {
    throw new NotFound(`Project with id ${id} not found!`);
  }
//   
  await Project.findByIdAndDelete(id).exec();
};
export const proposeProject = async (id: string) => {
  const projectExists: boolean = await IsProjectExist(id);
  if (!projectExists) {
    throw new NotFound(`project with id ${id} not found!`);
  }
  await Project.findByIdAndDelete(id).exec();
};
