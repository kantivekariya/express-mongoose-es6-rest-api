import express from "express";
import apiRoutes from "./api";

const mainRouter = express.Router();

mainRouter.use("/api/v1", apiRoutes);

export default mainRouter;
