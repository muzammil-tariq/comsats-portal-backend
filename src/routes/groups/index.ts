import { Router } from "express";
import * as studentGroupController from "../../controllers/groups/groupController";
import { withAuth } from "../../middleware/auth";

const router = Router();

// create student group
// api/group
router.post("/", withAuth, studentGroupController.createStudentGroup);

// get all student groups
// api/group/
router.get("/", withAuth, studentGroupController.getAllStudentGroups);

// get student groups
// api/group/:id
router.get("/:id", withAuth, studentGroupController.getStudentGroup);

// update student group
// api/group/:id
router.patch("/:id", withAuth, studentGroupController.updateStudentGroup);

// delete student group
// api/group/:id
router.delete("/:id", withAuth, studentGroupController.deleteStudentGroup);

// join student group
// api/group/join/:id
router.patch("/join/:id", withAuth, studentGroupController.joinStudentGroup);

export default router;
