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
<<<<<<< HEAD
router.post(
  "/post",
  fileUpload("public/content", "CONTENT", contentFileFilter).single("content"),
  PostController.createPost
);
=======
router.post("/post", PostController.createPost);
>>>>>>> contentDataUrl

export default router;
