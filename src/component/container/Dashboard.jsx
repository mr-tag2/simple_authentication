import React from "react";
import { Route, Routes } from "react-router-dom";
import ConfirmEmail from "../user/ConfirmEmail";
import Login from "../user/Login";
import PasswordRecovery from "../user/PasswordRecovery";
import Register from "../user/Register";
import Menu from "./Menu";

const Dashboard = () => {
  return (
    <div className="app-project">
      <Menu />
      <Routes>
        <Route path={"/simpleAuthentication/"}>
          <Route path="passwordrecovery" element={<PasswordRecovery />} />
          <Route path="confirmemail" element={<ConfirmEmail />} />
          <Route path="register" element={<Register />} />
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Dashboard;
