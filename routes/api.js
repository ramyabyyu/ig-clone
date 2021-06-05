import { Router } from "express";

// controllers
import * as PostController from "../controllers/PostController.js";

// middlewares
import fileUpload from "../middlewares/fileUpload.js";

// helpers
import { contentFileFilter } from "../helpers/fileFilter.js";

const router = Router();

// post api
router.get("/post", PostController.getPosts);
router.post("/post", PostController.createPost);

export default router;
