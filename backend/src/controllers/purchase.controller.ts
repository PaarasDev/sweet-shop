import type { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
import Sweet from "../models/sweet.model.js";

export const purchaseSweet = async (req: AuthRequest, res: Response) => {
  try {
    const { sweetId, quantity } = req.body;

    if (!sweetId || !quantity || quantity <= 0) {
      return res.status(400).json({ message: "Invalid purchase data" });
    }

    const sweet = await Sweet.findById(sweetId);

    if (!sweet) {
      return res.status(404).json({ message: "Sweet not found" });
    }

    if (sweet.quantity < quantity) {
      return res.status(400).json({
        message: "Not enough stock available",
        available: sweet.quantity,
      });
    }

    sweet.quantity -= quantity;
    await sweet.save();

    res.json({
      message: "Purchase successful",
      sweet: {
        id: sweet._id,
        name: sweet.name,
        remainingQuantity: sweet.quantity,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Purchase failed" });
  }
};
