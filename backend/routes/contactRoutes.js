import express from "express";
import auth from "../middleware/authMiddleware.js";
import admin from "../middleware/adminMiddleware.js";
import {
  createContact,
  getContacts
} from "../controllers/contactController.js";

const router = express.Router();

router.post("/", createContact);
router.get("/", auth, admin, getContacts);

export default router;
