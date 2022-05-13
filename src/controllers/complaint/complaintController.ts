import * as complaintService from "../../services/complaints/complaintsService";
import { BadRequest } from "../../utils/errors";




// add a complaint  of a user(student / faculty)
export const addComplaint = async (req: any, res: any, next: any) => {
  
  const obj = { 
    userId :req.body.userId,
    categoryName :req.body.categoryName,
    subcategoryName :req.body.subcategoryName,
    nature :req.body.nature,
    details : req.body.details,
    status :req.body.status,
    image : req.body.image,
    complainer: req.body.complainer,
    date: new Date(),
  } 
  try {
    const complaints = await complaintService.addComplaint(obj);
    res.send({ message: `complaints added successfully !`, complaints });
  } catch (ex) {
    next(ex);
  }
};


// Get all the complaints of a user(student / faculty)
export const getComplaint = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    const complaints = await complaintService.getComplaint(id);
    res.send({ message: `complaints successfully fetched!`, complaints });
  } catch (ex) {
    next(ex);
  }
};

// updated all the complaints of user( student / faculty)
export const updateComplaints = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  const obj = req.body;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    const complaints = await complaintService.updateComplaint(id, obj);
    res.send({ message: `complaints successfully updated!`, complaints });
  } catch (ex) {
    next(ex);
  }
};

// Get all the complaints of users(student / faculty)
export const getAllComplaints = async (req: any, res: any, next: any) => {


   const complainer = req.query.complainer;
   
   
  try {
        if(complainer=='STUDENT'){
            
          const students = await complaintService.getAllStudentComplaint();
          res.send({ message: `Student complaints successfully fetched!`, students });

        }
        if(complainer=='FACULTY'){
          const faculty = await complaintService.getAllFacultyComplaint();
          res.send({ message: `Faculty complaints successfully fetched!`, faculty });
        }
        if(complainer=='ALL'){ 
          let allData = await complaintService.getAllComplaint();
          res.send({ message: `Complaints successfully fetched!`, allData });
        }

  } catch (ex) {
    next(ex);
  }
};

// Delete the complaint of user(student/faculty)
export const deleteComplaint = async (req: any, res: any, next: any) => {
  const id = req.params.id;
  try {
    if (!id) {
      throw new BadRequest("Missing required field: id");
    }
    await complaintService.deleteComplaint(id);
    res.send({ message: `complaints successfully deleted!` });
  } catch (ex) {
    next(ex);
  }
};
