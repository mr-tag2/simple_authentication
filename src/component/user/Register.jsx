import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userRegister } from "../../actions/user";
import { errorMessage, warningMessage } from "../../utils/messages";
import SideForm from "../common/SideForm";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandler = (e) => {
    e.preventDefault();
    if (fullname == "" || email == "" || password == "" || rePassword == "") {
      warningMessage("لطفا همه اطلاعات را وارد کنید.");
      return;
    }
    if (password != rePassword) {
      errorMessage("گذرواژه و تکرار گذرواژه باهم برابر نیستند.");
      return;
    }
    dispatch(userRegister({ fullname, email, password }));
    emptyDatas();
    navigate("/simpleAuthentication/confirmemail");
  };

  const emptyDatas = () => {
    setFullname("");
    setEmail("");
    setPassword("");
    setRePassword("");
  };

  return (
    <div>
      <SideForm version="2" /> {/* 40% */}
      <form
        onSubmit={registerHandler}
        action=""
        className="container text-right from-section"
      >
        <div className="form-group col-10">
          <input
            type="text"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            value={fullname}
            className="form-control"
            placeholder="نام و نام خانوادگی"
          />
        </div>
        <div className="form-group col-10">
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="form-control"
            placeholder="ایمیل"
          />
        </div>
        <div className="form-group col-10 row pl-0">
          <div className="form-group col-6">
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              className="form-control"
              placeholder="گذرواژه"
            />
          </div>
          <div className="form-group col-6 pl-0">
            <input
              type="password"
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
              value={rePassword}
              className="form-control"
              placeholder=" تکرار گذرواژه"
            />
          </div>
        </div>
        <div className="form-group col-10 row">
          <div className="col-3 form-group">
            <input
              type={"submit"}
              className="col-12 btn btn-primary"
              value={"عضویت"}
            />
          </div>
          <div className="col-3 form-group">
            <button className="col-12 btn btn-light">
              حساب گوگل
              <img
                className="mr-2"
                src={process.env.PUBLIC_URL + "/images/search 1.png"}
                alt=""
              />
            </button>
          </div>
          <div className="col-6 form-group forget-text">
            <NavLink className="" to={"/simpleAuthentication/login"}>
              حساب کاربری دارم!
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
