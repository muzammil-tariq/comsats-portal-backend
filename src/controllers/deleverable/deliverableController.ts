import { Deliverable } from "../../models";

export const addDeleiverable = async (req: any, res: any, next: any) => {
  const { title, deadline, rubrics } = req.body;
  const newDeliverable = new Deliverable({
    title,
    deadline,
    totalRubrics: rubrics,
  });
  try {
    await newDeliverable.save();
    res.status(200).send({ message: `Deliverable successfully saved!` });
  } catch (error) {
    res.send(error);
  }
};

export const getallDeliverbles = async (req: any, res: any, next: any) => {
  const allDeliverables = await Deliverable.find();
  res.send(allDeliverables);
};
