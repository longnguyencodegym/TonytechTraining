import { addUser, getUserLogin } from "../../api/user";
import { FETCH_LOGIN_USER } from "../constant/authUser.constant";
import { setLoading } from "./setting.action";

export const setLoginUser = (data) => {
  return {
    type: FETCH_LOGIN_USER,
    payload: data,
  };
};

export const handleLoginUser = (acc, pass) => {
  return async (dispatch) => {
    let response = {};
    try {
      dispatch(setLoading(true));
      const users = await getUserLogin(acc, pass);
      dispatch(setLoginUser(users[0]));
      window.localStorage.clear();
      window.localStorage.setItem("id", users[0].id);
      window.localStorage.setItem("name", users[0].name);
      response = {
        error: false,
      };
    } catch (err) {
      console.log(err);
      response = {
        error: err,
      };
    }
    dispatch(setLoading(false));
    return response;
  };
};
export const LogOutUser = () => {
  return async (dispatch) => {
    window.localStorage.clear();
    dispatch(setLoginUser({}));
  };
};

export const registerUser = (user) => {
  return async (dispatch) => {
    let response = {};
    try {
      dispatch(setLoading(true));
      const userLogin = await addUser(user);
      dispatch(setLoginUser(userLogin));
      window.localStorage.clear();
      window.localStorage.setItem("id", userLogin.id);
      window.localStorage.setItem("name", userLogin.name);
      response = {
        error: false,
      };
    } catch (err) {
      console.log(err);
      response = {
        error: err,
      };
    }
    dispatch(setLoading(false));
    return response;
  };
};
