import * as authTypes from "../constants/auth";

export default (state = { authData: null, errors: {} }, action) => {
  switch (action.type) {
    case authTypes.AUTH:
      localStorage.setItem("token", JSON.stringify({ ...action?.payload }));
      return {
        ...state,
        authData: action.payload,
        errors: {},
      };
    case authTypes.CHANGE_PROFILE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
