import { Router } from "express";
import { addDeleiverable, getallDeliverbles } from "../../controllers/deleverable/deliverableController";
const router = Router();

// add Deliverable

router.post("/add", addDeleiverable);

// get all Deliverables
router.get("/", getallDeliverbles);
export default router;