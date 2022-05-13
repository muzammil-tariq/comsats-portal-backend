import { Router } from "express";
import {
  deleteFacultyProfile,
  getAllFacultyProfile,
  getFacultyProfile,
  updateFacultyProfile,
  uploadFacultyPhoto
} from "../../controllers/faculty/facultyController";
import { withAuth ,upload} from "../../middleware/auth";

const router = Router();

// get faculty profile
router.post("/upload-photo", withAuth, upload, uploadFacultyPhoto);


// api/faculty/:id
router.get("/:id", withAuth, getFacultyProfile);

// get all faculty
// api/faculty
router.get("/", getAllFacultyProfile);

// update faculty profile
// api/faculty/:id
router.patch("/:id", withAuth, updateFacultyProfile);

// delete student profile
// api/faculty/:id
router.delete("/:id", withAuth, deleteFacultyProfile);

export default router;
