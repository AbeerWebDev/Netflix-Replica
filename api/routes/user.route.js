import express from "express";
import { updateUser, deleteUser } from "../controllers/users.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.get("/:id", verifyToken, deleteUser);

export default router;
