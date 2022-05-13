import { Router } from "express";
import {
  deleteStudentProfile,
  getAllStudentsProfile,
  getStudentProfile,
  updateStudentProfile,
  uploadStudentPhoto
} from "../../controllers/student/studentController";
import { withAuth, upload } from "../../middleware/auth";

const router = Router();

// get faculty profile
router.post("/upload_student-photo", withAuth, upload, uploadStudentPhoto);


// get student profile
// api/students/:id
router.get("/:id", withAuth, getStudentProfile);

// get all students
// api/students
router.get("/", getAllStudentsProfile);

// update student profile
// api/students/:id
router.patch("/:id", withAuth, updateStudentProfile);

// delete student profile
// api/students/:id
router.delete("/:id", withAuth, deleteStudentProfile);

export default router;
