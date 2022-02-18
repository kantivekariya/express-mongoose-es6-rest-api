import express from "express";
import { authRoutes } from "../../module/auth/auth.routes";

const apiRoutes = express.Router();

apiRoutes.get("/", function (req, res, next) {
  res.json({ message: "from index api" });
});

apiRoutes.use("/auth", authRoutes);

export default apiRoutes;
