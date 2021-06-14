import * as api from "../api";
import * as Path from "../../routeNames";
import * as profileTypes from "../constants/profile";

export const changeProfilePicture =
  (id, avatar, router) => async (dispatch) => {
    try {
      const { data } = await api.changeProfilePicture(id, avatar);
      dispatch({ type: profileTypes.CHANGE_PROFILE_PICTURE, payload: data });
      router.push(Path.HOME);
    } catch (error) {
      console.log(error);
    }
  };
