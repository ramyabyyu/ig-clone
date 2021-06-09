import * as api from "../api";
import * as Path from "../../routeNames";
import * as profileTypes from "../constants/profile";

export const changeProfilePict = (id, avatar, router) => async (dispatch) => {
  try {
    const { data } = api.changeProfilePict(id, avatar);
    dispatch({ type: profileTypes.CHANGE_PROFILE_PICTURE, payload: data });
    router.push(Path.HOME);
  } catch (error) {
    console.log(error);
  }
};
