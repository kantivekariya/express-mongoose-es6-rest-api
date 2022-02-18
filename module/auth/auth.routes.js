import express from "express";
import userController from "./auth.controller";
import { asyncWrapper } from "../../utils/asyncWrapper";

const authRoutes = express.Router();

authRoutes.get("/", (req, res, next) => {
  res.json({ message: "from index api" });
});

// Create
authRoutes.post("/register", asyncWrapper(userController.register));

// Login
authRoutes.post("/login", asyncWrapper(userController.login));

//GetAll Data
authRoutes.get("/users", asyncWrapper(userController.findAll));

//GetBy ID
authRoutes.get("/users/:userId", asyncWrapper(userController.findOne));

//update by ID
authRoutes.put("/users/:userId", asyncWrapper(userController.update));

//Delete
authRoutes.delete("/users/:userId", asyncWrapper(userController.delete));

export { authRoutes };
