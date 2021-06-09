import { combineReducers } from "redux";

// reducers
import posts from "../reducers/posts";
import auth from "../reducers/auth";
import profile from "../reducers/profile";

export const reducers = combineReducers({ posts, auth, profile });
