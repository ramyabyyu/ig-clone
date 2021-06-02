import * as postTypes from "../constants/posts";
import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    dispatch({ type: postTypes.GET_POSTS, payload: data });
  } catch (error) {
    console.log(error);
  }
};
