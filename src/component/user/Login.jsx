import React, { useState } from "react";
import SideForm from "../common/SideForm";
import { NavLink } from "react-router-dom";
import { warningMessage } from "../../utils/messages";
import { userLogin } from "../../actions/user";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      warningMessage("لطفا همه اطلاعات را وارد کنید.");
      return;
    }
    dispatch(userLogin({ email, password }));
    emptyDatas();
  };

  const emptyDatas = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <SideForm version="3" /> {/* 40% */}
      <form
        action=""
        onSubmit={loginHandler}
        autoComplete="off"
        className="container text-right from-section"
      >
        <div className="form-group col-md-10 form-group-custom-lable">
          <input
            type="text"
            id="txtEmail"
            name="txtEmail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            placeholder=" "
            className="form-control"
          />
          <label htmlFor="txtEmail">ایمیل</label>
        </div>
        <div className="form-group col-md-10 form-group-custom-lable">
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder=" "
            className="form-control"
          />
          <label htmlFor="">گذرواژه</label>
        </div>
        <div className="form-group col-md-10 row">
          <div className="col-md-3 form-group pr-8px">
            <input
              type={"submit"}
              className="col-md-12 btn btn-primary"
              value={"ورود"}
            />
          </div>
          <div className="col-md-4 form-group">
            <button className="col-md-12 btn btn-primary-outline btn-google">
              حساب گوگل
              <img
                className="img-google"
                src={process.env.PUBLIC_URL + "/images/search 1.png"}
                alt=""
              />
            </button>
          </div>
          <div className="col-md-5 form-group forget-text">
            <NavLink className="" to={"/simpleAuthentication/passwordrecovery"}>
              گذر واژه خود را فراموش کرده اید؟
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
