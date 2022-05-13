import { Router } from "express";
import * as projectsController from "../../controllers/projects/projectController";
import { withAuth } from "../../middleware/auth";

const router = Router();

// create student project
// api/project
router.post("/", withAuth, projectsController.createStudentProject);

// get all student projects
// api/project/
router.get("/", withAuth, projectsController.getAllStudentProjects);

// get student projects
// api/project/:id
router.get("/:id", withAuth, projectsController.getStudentProject);

// update student projects
// api/project/:id
router.patch("/:id", withAuth, projectsController.updateStudentProject);

// delete student projects
// api/project/:id
router.delete("/:id", withAuth, projectsController.deleteStudentProject);

// apply for a  student project
// api/project/apply/:id
router.post("/apply/:id", withAuth, projectsController.applyStudentProject);

// propose a student project
// api/project/propose/:id
router.post("/propose/:id", withAuth, projectsController.proposeStudentProject);

export default router;
