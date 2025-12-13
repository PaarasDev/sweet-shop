import type { Request, Response } from "express";
import Sweet from "../models/sweet.model.js";

// ADMIN: add sweet
export const addSweet = async (req: Request, res: Response) => {
  const sweet = await Sweet.create(req.body);
  res.status(201).json(sweet);
};

// ADMIN: update sweet
export const updateSweet = async (req: Request, res: Response) => {
  const sweet = await Sweet.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!sweet) return res.status(404).json({ message: "Sweet not found" });
  res.json(sweet);
};

// ADMIN: delete sweet
export const deleteSweet = async (req: Request, res: Response) => {
  const sweet = await Sweet.findByIdAndDelete(req.params.id);
  if (!sweet) return res.status(404).json({ message: "Sweet not found" });
  res.json({ message: "Sweet deleted" });
};

// PUBLIC: view sweets
export const getAllSweets = async (_req: Request, res: Response) => {
  const sweets = await Sweet.find();
  res.json(sweets);
};
