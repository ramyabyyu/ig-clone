import Post from "../models/Post.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({}).sort({ _id: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const tags = post.tags.split(",");
  const newPost = new Post({ ...post, tags: [...tags] });

  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal Server Error",
    });
  }
};
