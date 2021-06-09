import * as profileTypes from "../constants/profile";

export default (state = { avatar: null }, action) => {
  switch (action.type) {
    case profileTypes.CHANGE_PROFILE_PICTURE:
      return {
        ...state,
        avatar: action.payload,
      };
    case profileTypes.EDIT_PROFILE_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
