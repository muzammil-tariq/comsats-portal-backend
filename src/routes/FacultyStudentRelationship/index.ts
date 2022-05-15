import { Router } from "express";
import {
  createFacultyStudentRelationship,
  getFacultyStudentRelationship,
  deleteFacultyStudentRelationship,
} from "../../controllers/facultyStudentRelationship/facultyStudentRelationship";
const router = Router();
import { withAuth, upload } from "../../middleware/auth";

// add Deliverable

router.post("/create", withAuth, upload, createFacultyStudentRelationship);
router.get("/get/:id", withAuth, upload, getFacultyStudentRelationship);
router.post("/delete/:id", withAuth, upload, deleteFacultyStudentRelationship);

export default router;
