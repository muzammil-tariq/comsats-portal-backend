import { Student } from "../../models";
import * as studentAuthService from "../../services/auth/studentAuthService";
import { generateAccessToken } from "../../token";
import { IStudent } from "../../types";
// import { IStudent } from "../../students.csv";
import { RETURN_CODE } from "../../utils/constant";
import { BadRequest, NotFound } from "../../utils/errors";
import fs from "fs";
import csv from "csv-parser";
// import csv from "fast-csv";

// try {
//   // IN REQ.FILES.”YOUR_FILE_NAME” WILL BE PRESENT
//   const file = req.files;
//   const bodyData = req.body;
//   // console.log(file);
//   // console.log(bodyData);
//   res.status(200).send({
//   message: “FILE RECEIVED!”,
//  });
//  } catch (error) {
//  res.send(“ERROR”);
//  }
export const registerStudentBatch = async (req: any, res: any, next: any) => {
  // const studentObj: IStudent = req.body;
  // const file = req.file;
  // console.log(file);
  // return
  let fileRows: any = [];
  let rows:any[]=[]

  try {
    // @ts-ignore
    // csv.fromPath(req.file.path)
    //   .on("data", function (data:any) {
    //     fileRows.push(data); // push each row
    //   })
    //   .on("end", function () {
    //     console.log(fileRows);
    //     fs.unlinkSync(req.file.path); // remove temp file
    //     //process "fileRows" and respond
    //   });
    // if (!file) {
    //   throw new NotFound("Students are not found!");
    // }
    fs.createReadStream(
      "/Users/dev/Documents/FYP/FYP-BE/src/controllers/auth/students.csv"
    )
      .pipe(csv())
      .on("data", (row) => {
        let student = {};
        const register = async () => {
          student = await studentAuthService.signUp(row.password, row);
        };
        register();
        rows.push(student);
      })
      .on("end", () => {
        console.log("CSV file successfully processed");
      });
    // console.log(fileRows);

    // const student = await studentAuthService.signUp(
    //   studentObj.password,
    //   studentObj
    // );
    res.send({
      message: `Student registered!`,
      rows,
    });
  } catch (err) {
    next(err);
  }
};
export const registerStudent = async (req: any, res: any, next: any) => {
  console.log("inside the studnent singup",req.body)
  const studentObj: IStudent = req.body;
  try {
    if (!studentObj.email || !studentObj.password) {
      throw new NotFound("Student Credentials are not found!");
    }
    const student = await studentAuthService.signUp(
      studentObj.password,
      studentObj
    );
    res.send({
      message: `Student registered!`,
      student,
    });
  } catch (err) {
    next(err);
  }
};

export const loginStudent = async (req: any, res: any, next: any) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  
  try {
    if (!email || !password) {
      throw new BadRequest("Missing required field: Email and Password");
    }
    const { token, student } = await studentAuthService.login(email, password);
    res.send({ message: `Student Logged in!`, token, student });
  } catch (ex) {
    next(ex);
  }
};
