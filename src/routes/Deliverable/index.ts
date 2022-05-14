import { Router } from "express";
import {
  addDeleiverable,
  getallDeliverbles,
  getAllDeliverablesByFacultyId,
  getAllDeliverablesByStudentId,
} from "../../controllers/deleverable/deliverableController";
const router = Router();

// add Deliverable

router.post("/add", addDeleiverable);

// get all Deliverables
router.get("/", getallDeliverbles);

// get all Deliverables by StudentId
router.get("/getByStudentId/:id", getAllDeliverablesByStudentId);

// get all Deliverables by FacultyId
router.get("/getByFacultyId/:id", getAllDeliverablesByFacultyId);

export default router;
