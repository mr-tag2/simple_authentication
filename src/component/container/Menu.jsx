import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Menu = () => {
  const registerPaths = [
    "/register",
    "/confirmemail",
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
            <NavLink className="nav-link main-menu" to="/">
              امکانات سگمنتو
            </NavLink>
          </li>
          <li className="nav-item">
            <img
              className="img-menu"
              src={process.env.PUBLIC_URL + "/images/fi-rr-play-alt 2.svg"}
              alt=""
            />
            <NavLink className="nav-link main-menu" to="/">
              ویدیو آموزشی
            </NavLink>
          </li>
          <li className="nav-item">
            <img
              className="img-menu"
              src={process.env.PUBLIC_URL + "/images/fi-rr-diamond 2.svg"}
              alt=""
            />
            <NavLink className="nav-link main-menu" to="/">
              قیمت اشتراک ماهانه
            </NavLink>
          </li>
          <li className="nav-item">
            <img
              className="img-menu"
              src={process.env.PUBLIC_URL + "/images/fi-rr-cookie 2.svg"}
              alt=""
            />
            <NavLink className="nav-link main-menu" to="/">
              همکاری با تیم سگمنتو
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav mnu-left">
          {registerPaths.includes(pathname) ? (
            <li className="nav-item col-md-12 text-left">
              <NavLink
                className="nav-link btn btn-primary col-md-9"
                to="/"
              >
                <span className="w-100 c-fff text-center">ورود </span>
              </NavLink>
            </li>
          ) : (
            <li className="nav-item col-md-12 text-left">
              <NavLink
                className="nav-link btn btn-primary col-md-9"
                to="/register"
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
