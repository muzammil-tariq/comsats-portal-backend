import { Router } from "express";
import {
  deleteComplaint,
  getAllComplaints,
  getComplaint,
  updateComplaints,
  addComplaint
} from "../../controllers/complaint/complaintController";

const router = Router();


// add compalint
// api/complaint/add/:id
router.post("/add", addComplaint);

// get complaint
// api/complaint/:id
router.get("/person/:id", getComplaint);

// get all complaint
// api/complaint
router.get("/all", getAllComplaints);

// update complaint
// api/complaint/:id
router.patch("/:id", updateComplaints);

// delete conplaint
// api/complaint/:id
router.delete("/:id", deleteComplaint);

export default router;  
