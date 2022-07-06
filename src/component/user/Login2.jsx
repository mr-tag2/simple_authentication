import React, { useState } from "react";
import SideForm from "../common/SideForm";
import { NavLink } from "react-router-dom";
import { warningMessage } from "../../utils/messages";
import { userLogin } from "../../actions/user";
import { useDispatch } from "react-redux";

const Login2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    if (email == "" || password == "") {
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
        className="container text-right from-section"
      >
        <div className="form-group col-10">
          <label htmlFor="">ایمیل</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="form-control"
          />
        </div>
        <div className="form-group col-10">
          <label htmlFor="">گذرواژه</label>
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="form-control"
          />
        </div>
        <div className="form-group col-10 row">
          <div className="col-3 form-group">
            <input
              type={"submit"}
              className="col-12 btn btn-primary"
              value={"ورود"}
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
            <NavLink className="" to={"/simpleAuthentication/passwordrecovery"}>
              گذر واژه خود را فراموش کرده اید؟
            </NavLink>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login2;
