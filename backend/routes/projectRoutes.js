import express from "express";
import auth from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";
import {
  createProject,
  getProjects,
  updateProject
} from "../controllers/projectController.js";

const router = express.Router();

router.get("/", auth, getProjects);
router.post("/", auth, admin, createProject);
router.patch("/:id", auth, admin, updateProject);

export default router;
