import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userChangePassWord } from "../../actions/user";
import {
  errorMessage,
  infoMessage,
  warningMessage,
} from "../../utils/messages";
import SideForm from "../common/SideForm";

const PasswordRecovery = () => {
  const [firstCode, setFirstCode] = useState("");
  const [secondCode, setSecondCode] = useState("");
  const [thirdCode, setThirdCode] = useState("");
  const [fourthCode, setFourthCode] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [disabledScopeOne, setDisabledScopeOne] = useState(true);
  const [disabledScopeTwo, setDisabledScopeTwo] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCodeWithEmail = (e) => {
    e.preventDefault();
    if (email == "") {
      warningMessage("لطفا ایمیل را وارد کنید.");
      return;
    }
    infoMessage("کد فعال سازی : 0000");
    setDisabledScopeOne(false);
  };

  const confirmEmail = (e) => {
    e.preventDefault();

    const value = firstCode + secondCode + thirdCode + fourthCode;
    if (value != "0000") {
      errorMessage("کد فعال سازی اشتباه است.");
      return;
    }
    setDisabledScopeTwo(false);
  };

  const changeAndLogin = (e) => {
    e.preventDefault();
    if (password != rePassword) {
      errorMessage("گذرواژه و تکرار گذرواژه باهم برابر نیستند.");
      return;
    }
    dispatch(userChangePassWord({ email, password }));
    navigate("/simpleAuthentication");
  };

  return (
    <div>
      <SideForm version="2" />
      <form action="" className="container text-right from-section-header">
        <div className="form-group col-10 row mr-0">
          <label htmlFor="" className="col-12 p-0">
            ایمیل
          </label>
          <div className="col-6 row">
            <input
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              className="form-control col-12"
            />
          </div>
          <button
            className="col-3 mr-5 btn btn-info"
            onClick={getCodeWithEmail}
          >
            ارسال مجدد ایمیل
          </button>
        </div>

        <div className="form-group col-10 row mr-0">
          <label htmlFor="" className="col-12 p-0">
            کد فعال سازی
          </label>
          <div className="col-6 row">
            <input
              type="text"
              onChange={(e) => {
                setFirstCode(e.target.value);
              }}
              value={firstCode}
              maxLength="1"
              className="form-control col-2 text-center"
              disabled={disabledScopeOne ? "disabled" : ""}
            />
            <input
              type="text"
              onChange={(e) => {
                setSecondCode(e.target.value);
              }}
              value={secondCode}
              maxLength="1"
              className="form-control col-2 mr-2 text-center"
              disabled={disabledScopeOne ? "disabled" : ""}
            />
            <input
              type="text"
              onChange={(e) => {
                setThirdCode(e.target.value);
              }}
              value={thirdCode}
              maxLength="1"
              className="form-control col-2 mr-2 text-center"
              disabled={disabledScopeOne ? "disabled" : ""}
            />
            <input
              type="text"
              onChange={(e) => {
                setFourthCode(e.target.value);
              }}
              value={fourthCode}
              maxLength="1"
              className="form-control col-2 mr-2 text-center"
              disabled={disabledScopeOne ? "disabled" : ""}
            />
          </div>
          <button
            className="col-3 mr-5 btn btn-info"
            disabled={disabledScopeOne ? "disabled" : ""}
            onClick={confirmEmail}
          >
            تایید ایمیل
          </button>
        </div>

        <div className="form-group col-10 row pl-0">
          <div className="form-group col-6">
            <label htmlFor="">گذرواژه</label>
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              className="form-control"
              disabled={disabledScopeTwo ? "disabled" : ""}
            />
          </div>
          <div className="form-group col-6 pl-0">
            <label htmlFor="">تکرار گذرواژه</label>
            <input
              type="password"
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
              value={rePassword}
              className="form-control"
              disabled={disabledScopeTwo ? "disabled" : ""}
            />
          </div>
        </div>
        <div className="form-group col-10 row">
          <div className="col-4 form-group">
            <button
              className="col-12 btn btn-primary"
              disabled={disabledScopeTwo ? "disabled" : ""}
              onClick={changeAndLogin}
            >
              ذخیره گذرواژه و ورود
            </button>
          </div>
          <div className="col-8 form-group forget-text">
            <NavLink className="" to={"/simpleAuthentication/register"}>
              حساب کاربری ندارم!
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PasswordRecovery;
