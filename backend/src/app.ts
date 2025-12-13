import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import protectedRoutes from "./routes/protected.routes.js";
import sweetRoutes from "./routes/sweet.routes.js";
import purchaseRoutes from "./routes/purchase.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/sweets", sweetRoutes);
app.use("/api/purchase", purchaseRoutes);

app.get("/", (_req, res) => {
  res.send("Backend is running");
});

app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);

export default app;
