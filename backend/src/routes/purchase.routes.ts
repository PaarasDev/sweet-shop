import express from "express";
import { purchaseSweet } from "../controllers/purchase.controller.js";
import auth from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", auth, purchaseSweet);

export default router;
