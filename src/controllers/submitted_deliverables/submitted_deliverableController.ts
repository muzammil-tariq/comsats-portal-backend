import { Submitterd_deliverable, Faculty } from "../../models";
import { BadRequest } from "../../utils/errors";
import { NotFound } from "../../utils/errors";

export const addSubmittedDeleiverable = async (
  req: any,
  res: any,
  next: any
) => {
  console.log(req.body);
  console.log(req.file);
  const std_id = req.user.id;
  const file_name = req.file.filename;
  const { rubrics, title, deadline, faculty_id } = req.body;
  const newSubmittedDeliverable = new Submitterd_deliverable({
    title,
    deadline,
    rubrics: JSON.parse(rubrics),
    file: file_name,
    student_ID: std_id,
    faculty_id: faculty_id,
  });
  try {
    await newSubmittedDeliverable.save();
    res.status(200).send({ message: `Deliverable successfully Submitted!` });
  } catch (error) {
    res.send(error);
  }
};

export const getSubmittedDeleiverables = async (
  req: any,
  res: any,
  next: any
) => {
  const allSubmittedDeleverables = await Submitterd_deliverable.find();
  res.status(200).send(allSubmittedDeleverables);
};

export const getSubmittedDeliverablesByFaculty = async (
  req: any,
  res: any,
  next: any
) => {
  try {
    const allSubmittedDeleverables = await Submitterd_deliverable.find({
      // faculty_id: "",
      markedObtain: false,
    });
    res.status(200).send(allSubmittedDeleverables);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

export const updateSubmittedDeliverables = async (
  req: any,
  res: any,
  next: any
) => {
  const { id, rubrics, comments } = req.body;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    const data = await Submitterd_deliverable.findById(id).exec();
    if (!data) {
      throw new NotFound(`value with id ${id} not found!`);
    }

    console.log(comments);

    if (comments) {
      await Submitterd_deliverable.findByIdAndUpdate(
        { _id: id },
        { $set: { comments: comments, markedObtain: true } }
      );
    }
    await rubrics.map(async (r: any) => {
      await Submitterd_deliverable.updateOne(
        {
          _id: id,
          "rubrics._id": r._id,
        },
        {
          $set: {
            "rubrics.$.obtained_score": parseInt(r.obtained_score),
          },
        }
      ).exec();
    });

    const finalData = await Submitterd_deliverable.findById(id).exec();

    res
      .status(200)
      .send({ message: `Values successfully updated!`, finalData });
  } catch (ex) {
    next(ex);
  }
};
