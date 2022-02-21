import express from "express";
import userController from "./auth.controller";
import { asyncWrapper } from "../../utils/asyncWrapper";
import auth from "../../middleware/auth.middleware";

const authRoutes = express.Router();

authRoutes.get("/", (req, res, next) => {
  res.json({ message: "from index api" });
});

// Create
authRoutes.post("/register", asyncWrapper(userController.register));

// Login
authRoutes.post("/login", asyncWrapper(userController.login));

//GetAll Data
authRoutes.get("/users", auth, asyncWrapper(userController.findAll));

//GetBy ID
authRoutes.get("/users/:userId", auth, asyncWrapper(userController.findOne));

//update by ID
authRoutes.put("/users/:userId", auth, asyncWrapper(userController.update));

//Delete
authRoutes.delete("/users/:userId", auth, asyncWrapper(userController.delete));

export { authRoutes };
