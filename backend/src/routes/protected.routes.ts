import { Router } from "express";
import auth from "../middleware/auth.middleware.js";

const router = Router();

router.get("/me", auth, (req, res) => {
  res.json({
    message: "You are authenticated",
  });
});

export default router;
