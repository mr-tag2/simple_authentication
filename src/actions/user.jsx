import { isEmpty } from "lodash";

import {
  changePassWordByEmail,
  getDataByUserPass,
  saveData,
} from "../utils/data";

import { errorMessage, successMessage } from "../utils/messages";

export const userLogin = ({ email, password }) => {
  return async (dispatch, getState) => {
    const data = getDataByUserPass({ email, password });
    if (!isEmpty(data)) {
      successMessage("ورود با موفقیت انجام شد.");
      await dispatch({ type: "LOGIN", payload: data });
      return true;
    } else {
      errorMessage("نام  کاربری یا گذرواژه صحیح نمی باشد.");
      await dispatch({ type: "LOGIN", payload: {} });
      return false;
    }
  };
};

export const userRegister = ({ fullname, email, password }) => {
  return async (dispatch, getState) => {
    const data = await saveData({ fullname, email, password });
    if (!isEmpty(data)) {
      successMessage("ثبت نام با موفقیت انجام شد .");
      await dispatch({
        type: "REGISTER",
        payload: data,
      });
      return true;
    } else {
      errorMessage("عملیات با خطا مواجه شد.");
      await dispatch({ type: "REGISTER", payload: {} });
      return false;
    }
  };
};

export const userChangePassWord = ({ email, password }) => {
  return async (dispatch, getState) => {
    const data = await changePassWordByEmail({ email, password });
    if (!isEmpty(data)) {
      successMessage("تغییر گذرواژه با موفقیت انجام شد .");
      await dispatch({
        type: "CHANGE",
        payload: data,
      });
      return true;
    } else {
      errorMessage("عملیات با خطا مواجه شد.");
      await dispatch({ type: "CHANGE", payload: {} });
      return false;
    }
  };
};
