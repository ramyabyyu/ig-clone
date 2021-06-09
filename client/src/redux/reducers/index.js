import { combineReducers } from "redux";

// reducers
import posts from "../reducers/posts";
import auth from "../reducers/auth";

export const reducers = combineReducers({ posts, auth });
