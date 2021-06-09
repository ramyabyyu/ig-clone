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
    case authTypes.AUTH_ERROR:
      return {
        ...state,
        authData: null,
        errors: action.payload,
      };
    default:
      return state;
  }
};
