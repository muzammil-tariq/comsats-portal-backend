import { Router } from "express";
import {
  addSubmittedDeleiverable,
  getSubmittedDeleiverables,
  updateSubmittedDeliverables,
} from "../../controllers/submitted_deliverables/submitted_deliverableController";
const router = Router();
import { withAuth, upload } from "../../middleware/auth";

// add Deliverable

router.post("/add", withAuth, upload, addSubmittedDeleiverable);

// get all Deliverables
router.get("/", getSubmittedDeleiverables);

router.patch("/", updateSubmittedDeliverables);

export default router;
