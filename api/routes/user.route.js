import express from "express";
import { updateUser } from "../controllers/users.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.put("/:id", verifyToken, updateUser);

export default router;
