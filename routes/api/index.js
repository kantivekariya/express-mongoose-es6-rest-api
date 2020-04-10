import express from "express";
import { crudRoutes } from "../../module/crud/crud.routes";

const apiRoutes = express.Router();

apiRoutes.get("/", function(req, res, next) {
  res.json({ message: "from index api" });
});

apiRoutes.use("/auth", crudRoutes);

export default apiRoutes;
