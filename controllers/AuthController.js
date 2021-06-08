import User from "../models/User.js";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

// helpers
import { isCapital, userNameValidate } from "../helpers/index.js";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export const register = async (req, res) => {
  const { email, password, firstName, lastName, confirmPassword } = req.body;

  // check firstName and lastName character must be lower than 10
  if (firstName.length > 10) {
    return res.json({
      success: false,
      type: "firstName",
      message: "First Name characters must be lower than 10",
    });
  }
  if (lastName.length > 10) {
    return res.json({
      success: false,
      type: "lastName",
      message: "Last Name characters must be lower than 10",
    });
  }

  // email validation
  const regEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.match(regEx)) {
    return res.json({
      success: false,
      type: "email",
      message: "Email is not valid",
    });
  }

  const oldUser = await User.findOne({ email });
  if (oldUser) {
    return res.json({
      success: false,
      type: "email",
      message: "Email has been taken! Try another email",
    });
  }

  // password and confirmPassword validation
  if (password.length < 8) {
    return res.json({
      success: false,
      type: "password",
      message: "Password must be at least 8 characters",
    });
  }

  if (!isCapital(password)) {
    return res.json({
      success: false,
      type: "password",
      message: "Password must be at least contains a capital letters",
    });
  }

  if (confirmPassword != password) {
    return res.json({
      success: false,
      type: "confirmPassword",
      message: "Confirm Password is not match",
    });
  }

  // hash password
  const hashPassword = await bcrypt.hash(password, 12);

  try {
    const data = await User.create({
      name: `${firstName} ${lastName}`,
      email,
      password: hashPassword,
    });

    const token = jwt.sign({ email: data.email, id: data._id }, SECRET_KEY, {
      expiresIn: "24h",
    });

    res.status(201).json({ success: true, data, token });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

export const changeProfile = async (req, res) => {
  const { avatar, bio, website, username } = req.body;
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) return res.json("User not found");

  const validUsername = userNameValidate(username);

  const changeProfileInfo = { avatar, bio, website, username: validUsername };

  try {
    await User.findByIdAndUpdate(id, changeProfileInfo, { new: true });
    res.status(200).json(changeProfileInfo);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};
