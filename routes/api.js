import { Router } from "express";

// controllers
import * as PostController from "../controllers/PostController.js";
import * as AuthController from "../controllers/AuthController.js";

// middlewares
import auth from "../middlewares/auth.js";

const router = Router();

// auth api
router.post("/register", AuthController.register);
// router.post("/profile-info/:id", auth, AuthController.changeProfile);
router.post("/profile-picture/:id", auth, AuthController.changeProfilePicture);

// post api
router.get("/post", PostController.getPosts);
router.post("/post", auth, PostController.createPost);

export default router;
