import { Router } from "express";
import {
  addSubmittedDeleiverable,
  getSubmittedDeleiverables,
  updateSubmittedDeliverables,
  getSubmittedDeliverablesByFaculty,
} from "../../controllers/submitted_deliverables/submitted_deliverableController";
const router = Router();
import { withAuth, upload } from "../../middleware/auth";

// add Deliverable

router.post("/add", withAuth, upload, addSubmittedDeleiverable);

// get all Deliverables
router.get("/", getSubmittedDeleiverables);

// get all Deliverables by Faculty and false
router.get("/:id", getSubmittedDeliverablesByFaculty);

router.patch("/", updateSubmittedDeliverables);

export default router;
