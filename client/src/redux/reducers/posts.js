import * as postTypes from "../constants/posts";

export default (state = [], action) => {
  switch (action.type) {
    case postTypes.GET_POSTS:
      return action.payload;
    default:
      return state;
  }
};
