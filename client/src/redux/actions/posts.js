import * as postTypes from "../constants/posts";
import * as api from "../api";
import * as Path from "../../routeNames";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    dispatch({ type: postTypes.GET_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post, router) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: postTypes.CREATE_POST, payload: data });
    router.push(Path.HOME);
  } catch (error) {
    console.log(error);
  }
};
