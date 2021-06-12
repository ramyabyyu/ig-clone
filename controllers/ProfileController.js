import User from "../models/User.js";
import mongoose from "mongoose";

export const changeProfileInfo = async (req, res) => {
  const { bio, website, username } = req.body;
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.json("User not found");

  const validUsername = userNameValidate(username);

  const updatedProfileInfo = { bio, website, username: validUsername };

  try {
    await User.findByIdAndUpdate(id, updatedProfileInfo, { new: true });
    res.status(200).json(updatedProfileInfo);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
