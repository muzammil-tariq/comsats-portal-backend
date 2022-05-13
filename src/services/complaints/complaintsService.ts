import Complaint from "../../models/complaints";
import { IComplaint } from "../../types/complaint.interface";
import { NotFound } from "../../utils/errors";

// complaint found
export const IsComplaintExist = async (id: string) => {
  const student: IComplaint | null = await Complaint.findById(id).exec();
  return !!student;
};

//get a complaint
export const getComplaint = async (id: string) => {
  let student  = await Complaint.find({userId:id}).exec();
  if (!student) {
    throw new NotFound(`Complaint with id ${id} not found!`);
  }
  else{
       // filtering the json response data
        const filteredData = [{}];
        var counter = 0;
        student.map((item)=>{
          counter++;
          const obj ={
            id :counter,
            Category:item.categoryName,
            SubCategory: item.subcategoryName,
            Date:item.date,
            Status:item.status,
            details:item.details
          }
          filteredData.push(obj);
        })
        filteredData.shift()
        return filteredData;

  }


};



//add a complaint
export const addComplaint = async (obj:object) => {

  const complaint = new Complaint(obj)
  const response = await complaint.save();

  if (!response) {
    throw new NotFound(`Complaint didn't register!`);
  }
  return response;
};


// get all students complaints
export const getAllStudentComplaint = async () => {
  const students  = await Complaint.find({complainer:"STUDENT"}).exec();
  if (!students) {
    throw new NotFound(`No Student Complaints found!`);
  }
  else{
    // filtering the json response data
    const filteredData = [{}];
    var counter = 0;
    students.map((item)=>{
       counter++;
      const obj ={
        id :counter,
        Category:item.categoryName,
        SubCategory: item.subcategoryName,
        Date:item.date,
        Status:item.status,
        details:item.details
      }
      filteredData.push(obj);
    })
    filteredData.shift()
    return filteredData;

  }
 
};

// get all faculty complaints
export const getAllFacultyComplaint = async () => {
  const faculty  = await Complaint.find({complainer:"FACULTY"}).exec();
  if (!faculty) {
    throw new NotFound(`No Faculty Complaints found!`);
  }
  else{
    // filtering the json response data
    const filteredData = [{}];
    var counter = 0;
    faculty.map((item)=>{
       counter++;
      const obj ={
        id :counter,
        Category:item.categoryName,
        SubCategory: item.subcategoryName,
        Date:item.date,
        Status:item.status,
        details:item.details
      }
      filteredData.push(obj);
    })
    filteredData.shift()
    return filteredData;

  }
};

// get all  complaints
export const getAllComplaint = async () => {
  const complaints  = await Complaint.find({}).exec();
  if (!complaints) {
    throw new NotFound(`No Complaints found!`);
  }
  else{
    // filtering the json response data
    const filteredData = [{}];
    var counter = 0;
    complaints.map((item)=>{
       counter++;
      const obj ={
        id :counter,
        Category:item.categoryName,
        SubCategory: item.subcategoryName,
        Date:item.date,
        Status:item.status,
        details:item.details
      }
      filteredData.push(obj);
    })
    filteredData.shift()
    return filteredData;

  }
};





// update a complaint
export const  updateComplaint = async (id: string, obj: any) => {
  const student: IComplaint | null = await Complaint.findByIdAndUpdate(
    id,
    obj
  ).exec();
  if (!student) {
    throw new NotFound(`Complaint with id ${id} not found!`);
  }
  return student;
};

// delete complaint 
export const deleteComplaint = async (id: string) => {
  const studentExists: boolean = await IsComplaintExist(id);
  if (!studentExists) {
    throw new NotFound(`Complaint with id ${id} not found!`);
  }
  await Complaint.findByIdAndDelete(id).exec();
};
