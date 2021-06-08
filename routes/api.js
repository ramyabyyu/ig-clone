import { Router } from "express";

// controllers
import * as PostController from "../controllers/PostController.js";

// middlewares

const router = Router();

// post api
router.get("/post", PostController.getPosts);
router.post("/post", PostController.createPost);

export default router;
