import React from "react";
import { Route, Routes } from "react-router-dom";
import ConfirmEmail from "../user/ConfirmEmail";
import Login from "../user/Login";
import Login2 from "../user/Login2";
import PasswordRecovery from "../user/PasswordRecovery";
import Register from "../user/Register";
import Register2 from "../user/Register2";
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
          <Route path="register2" element={<Register2 />} />
          <Route path="login" element={<Login />} />
          <Route path="login2" element={<Login2 />} />
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Dashboard;
