import axios from "axios";
import { API_URL } from "../../config";
import { USERS_SET_USERS } from "./UsersReducers";

export const findAllUsers = () => {
  return (dispatch, getState) => {
    axios.get(`${API_URL}/users.json`).then(res => {
      if (res.status === 200) {
        dispatch({
          type: USERS_SET_USERS,
          payload: res.data.users
        });
      }
    });
  }
}
