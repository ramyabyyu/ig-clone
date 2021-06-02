import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new Post({
    ...post,
    content: req.file.path,
  });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};
