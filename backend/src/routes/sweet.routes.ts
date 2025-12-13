import { Router } from "express";
import auth from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/role.middleware.js";
import {
  addSweet,
  updateSweet,
  deleteSweet,
  getAllSweets
} from "../controllers/sweet.controller.js";

const router = Router();

// public
router.get("/", getAllSweets);

// admin-only
router.post("/", auth, adminOnly, addSweet);
router.put("/:id", auth, adminOnly, updateSweet);
router.delete("/:id", auth, adminOnly, deleteSweet);

export default router;
