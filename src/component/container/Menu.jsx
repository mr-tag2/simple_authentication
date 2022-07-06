import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Menu = () => {
  const registerPaths = [
    "/simpleAuthentication/register",
    "/simpleAuthentication/register2",
    "/simpleAuthentication/confirmemail",
  ];
  const { pathname } = useLocation();

  return (
    <div>
      <nav className="navbar  bg-oncolor text-right">
        <ul className="navbar-nav mnu-right">
          <li className="nav-item">
            <img
              className="img-menu"
              src={process.env.PUBLIC_URL + "/images/fi-rr-grid 2.svg"}
              alt=""
            />
            <NavLink className="nav-link" to="/simpleAuthentication">
              امکانات سگمنتو
            </NavLink>
          </li>
          <li className="nav-item">
            <img
              className="img-menu"
              src={process.env.PUBLIC_URL + "/images/fi-rr-play-alt 2.svg"}
              alt=""
            />
            <NavLink className="nav-link" to="/simpleAuthentication">
              ویدیو آموزشی
            </NavLink>
          </li>
          <li className="nav-item">
            <img
              className="img-menu"
              src={process.env.PUBLIC_URL + "/images/fi-rr-diamond 2.svg"}
              alt=""
            />
            <NavLink className="nav-link" to="/simpleAuthentication">
              قیمت اشتراک ماهانه
            </NavLink>
          </li>
          <li className="nav-item">
            <img
              className="img-menu"
              src={process.env.PUBLIC_URL + "/images/fi-rr-cookie 2.svg"}
              alt=""
            />
            <NavLink className="nav-link" to="/simpleAuthentication">
              همکاری با تیم سگمنتو
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav mnu-left">
          {registerPaths.includes(pathname) ? (
            <li className="nav-item ">
              <NavLink
                className="nav-link btn btn-primary"
                to="/simpleAuthentication/login"
              >
                <span className="w-100 c-fff text-center">ورود </span>
              </NavLink>
              <NavLink
                className="nav-link btn btn-primary mr-2"
                to="/simpleAuthentication/login2"
              >
                <span className="w-100 c-fff text-center">ورود </span>
              </NavLink>
            </li>
          ) : (
            <li className="nav-item ">
              <NavLink
                className="nav-link btn btn-primary"
                to="/simpleAuthentication/register"
              >
                <span className="w-100 c-fff text-center">ثبت نام </span>
              </NavLink>
              <NavLink
                className="nav-link btn btn-primary mr-2"
                to="/simpleAuthentication/register2"
              >
                <span className="w-100 c-fff text-center">ثبت نام </span>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
