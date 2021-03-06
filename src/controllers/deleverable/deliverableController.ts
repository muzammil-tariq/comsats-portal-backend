import { Deliverable } from "../../models";
import { FacultyStudentRelationship } from "../../models";

export const addDeleiverable = async (req: any, res: any, next: any) => {
  const { title, deadline, rubrics, faculty_id } = req.body;

  // console.log(faculty_id);

  const newDeliverable = new Deliverable({
    title,
    deadline,
    totalRubrics: rubrics,
    faculty_id,
  });
  try {
    await newDeliverable.save();
    res.status(200).send({ message: `Deliverable successfully saved! haha` });
  } catch (error) {
    res.send(error);
  }
};

export const getallDeliverbles = async (req: any, res: any, next: any) => {
  const allDeliverables = await Deliverable.find();
  res.send(allDeliverables);
};

export const getAllDeliverablesByStudentId = async (
  req: any,
  res: any,
  next: any
) => {
  try {
    const fId: any = await FacultyStudentRelationship.findOne({
      student: req.params.id,
    });

    if (!fId) {
      return res.send({ message: "No faculty is allocated to this student." });
    }

    const allDeliverables = await Deliverable.find({ faculty_id: fId.faculty });
    res.send(allDeliverables);
  } catch (error) {
    res.send(error);
  }
};

export const getAllDeliverablesByFacultyId = async (
  req: any,
  res: any,
  next: any
) => {
  let fId = req.params.id;
  const allDeliverables = await Deliverable.find({ faculty_id: fId });
  res.send(allDeliverables);
};
