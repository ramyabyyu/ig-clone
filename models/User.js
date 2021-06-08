import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  // auth
  email: String,
  password: String,

  // profile
  name: String,
  username: String,
  avatar: String,
  bio: String,
  website: String,
  followers: { type: [String], default: [] },
  following: { type: [String], default: [] },

  createdAt: { type: Date, default: Date.now() },
});

const User = model("users", userSchema);

export default User;
