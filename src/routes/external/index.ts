import { Router } from "express";
import {
  deleteExternalProfile,
  getAllExternalProfile,
  getExternalProfile,
  updateExternalProfile,
} from "../../controllers/external/externalController";
import { withAuth } from "../../middleware/auth";

const router = Router();

// get external profile
// api/external/:id
router.get("/:id", withAuth, getExternalProfile);

// get all external
// api/external
router.get("/", withAuth, getAllExternalProfile);

// update external profile
// api/external/:id
router.patch("/:id", withAuth, updateExternalProfile);

// delete external profile
// api/external/:id
router.delete("/:id", withAuth, deleteExternalProfile);

export default router;
