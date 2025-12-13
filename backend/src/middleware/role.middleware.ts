import type { Response, NextFunction } from "express";
import type { AuthRequest } from "./auth.middleware.js";

export const adminOnly = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.role !== "ADMIN") {
    return res.status(403).json({ message: "Admin only" });
  }
  next();
};
