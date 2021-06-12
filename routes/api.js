import { Router } from "express";

// controllers
import * as PostController from "../controllers/PostController.js";
import * as AuthController from "../controllers/AuthController.js";
import * as ProfileController from "../controllers/ProfileController.js";

// middlewares
import auth from "../middlewares/auth.js";

const router = Router();

// auth api
router.post("/register", AuthController.register);

// profile api
router.post(
  "/change-profile-info/:id",
  auth,
  ProfileController.changeProfileInfo
);

// post api
router.get("/post", PostController.getPosts);
router.post("/post", auth, PostController.createPost);

export default router;
