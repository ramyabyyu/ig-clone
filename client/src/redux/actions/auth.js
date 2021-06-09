import * as api from "../api";
import * as Path from "../../routeNames";
import * as authTypes from "../constants/auth";

export const register = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.register(formData);

    if (data.success) {
      dispatch({ type: authTypes.AUTH, payload: data });
      router.push(Path.UPLOAD_PROFILE);
    } else {
      dispatch({ type: authTypes.AUTH_ERROR, payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};
