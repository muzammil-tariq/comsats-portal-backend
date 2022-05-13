import { Router } from "express";
import AuthRouter from "./auth";
import StudentRouter from "./student";
import FacultyRouter from "./faculty";
import ExternalRouter from "./external";
import StudentProjectRouter from "./projects";
import StudentGroupRouter from "./groups";
import ComplaintRouter from "./complaint";
import DeliverableRouter from "./Deliverable";
import SubmittedDeliverable from "./SubmitttedDeliverable";
import FacultyStudentRelationship from "./FacultyStudentRelationship";

const router = Router();

// auth router
router.use("/auth", AuthRouter);

// student projects router
router.use("/project", StudentProjectRouter);

// student groups router
router.use("/group", StudentGroupRouter);

// student router
router.use("/students", StudentRouter);

// faculty router
router.use("/faculty", FacultyRouter);

// external router
router.use("/external", ExternalRouter);

// complaint router
router.use("/complaint", ComplaintRouter);

// Deliverable router
router.use("/deliverable", DeliverableRouter);

// Submitted Deliverable router
router.use("/submitted_deliverable", SubmittedDeliverable);

// Faculty Student Relationship router
router.use("/faculty_student_relationship", FacultyStudentRelationship);

export default router;
