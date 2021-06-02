import mongoose from "mongoose";
const { Schema, model } = mongoose;

const postSchema = new Schema({
  user: String,
  caption: String,
  content: String,
  tags: { type: [String], default: [] },
  likes: { type: [String], default: [] },
  comments: {
    text: { type: [String], default: [] },
    user: { type: [String], default: [] },
  },
  createdAt: { type: Date, default: Date.now() },
});

const Post = model("posts", postSchema);

export default Post;
