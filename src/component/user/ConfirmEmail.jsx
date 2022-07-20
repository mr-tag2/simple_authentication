import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  errorMessage,
  infoMessage,
  successMessage,
} from "../../utils/messages";

const ConfirmEmail = () => {
  const [firstCode, setFirstCode] = useState("");
  const [secondCode, setSecondCode] = useState("");
  const [thirdCode, setThirdCode] = useState("");
  const [fourthCode, setFourthCode] = useState("");
  const [showCode, setShowCode] = useState(false);

  const navigate = useNavigate();

  const confirmHandler = (e) => {
    e.preventDefault();
    const value = firstCode + secondCode + thirdCode + fourthCode;
    if (value !== "0000") {
      errorMessage("کد فعال سازی اشتباه است.");
      return;
    }
    successMessage("حساب شما فعال شد.");
    navigate("/simpleAuthentication");
    emptyDatas();
  };

  const emptyDatas = () => {
    setFirstCode("");
    setSecondCode("");
    setThirdCode("");
    setFourthCode("");
  };

  const getCodeNumber = () => {
    infoMessage("کد فعال سازی : 0000");
    setShowCode(true);
  };

  if (!showCode) getCodeNumber();

  return (
    <div className="container text-center text-confirm-email">
      <h6 className="col-md-7 pr-5 pl-4 text-right line-height-text">
        مطئمن باشین این یه متن از پیش آماده شده نیست ، ما خیلی خوشحالیم که شما
        از امروز همراه ما هستی ، قطعا قول میدیم هر روز شما هم اینطوری خوب و خوش
        باشه چون تلاشمون اینه که کنار خلق ارزش ، حس خوبی هم از کار با محصولات ما
        دریافت کنید و از اون گذشته ، ما دوست داریم شما در کسب و کارتون به اوج
        برسید . زود باشین برین از ایمیلتون کد فعالسازی حساب رو بردارین و
        ماجرجویی هاتون رو در سگمنتو شروع کنید . (اگرم دیدین ایمیلی نیومده، مجددا
        درخواست بدین، کامپیوتر ها خیلی هم باهوش نیستن وممکنه اشتباه کرده باشن
        😉)
      </h6>
      <form className="col-md-7 div-confirm-email" onSubmit={confirmHandler}>
        <label className="col-md-12">
          <b>کد فعال سازی</b>
        </label>
        <div className="col-md-5 row div-confirm-email mb-2">
          <input
            type="text"
            onChange={(e) => {
              setFirstCode(e.target.value);
            }}
            value={firstCode}
            maxLength="1"
            className="form-control col-md-2-5 text-center"
          />
          <input
            type="text"
            onChange={(e) => {
              setSecondCode(e.target.value);
            }}
            value={secondCode}
            maxLength="1"
            className="form-control col-md-2-5 mr-3 text-center"
          />
          <input
            type="text"
            onChange={(e) => {
              setThirdCode(e.target.value);
            }}
            value={thirdCode}
            maxLength="1"
            className="form-control col-md-2-5 mr-3 text-center"
          />
          <input
            type="text"
            onChange={(e) => {
              setFourthCode(e.target.value);
            }}
            value={fourthCode}
            maxLength="1"
            className="form-control col-md-2-5 mr-3 text-center"
          />
        </div>
        <div className="col-md-12 row">
          <div className="col-md-3"></div>
          <div className="col-md-6 box-btn-email">
            <input
              type="submit"
              className="col-md-5 btn btn-primary"
              value="تایید ایمیل"
            />
          </div>
          <div className="col-md-3  forget-text">
            <span className="cursor-pointer link-style" onClick={getCodeNumber}>
              دریافت مجدد ایمیل
            </span>
          </div>
        </div>
      </form>
      <div className="col-md-7 div-confirm-email mt-5">
        <div className="col-md-7">
          <img
            className="img-menu"
            src={process.env.PUBLIC_URL + "/images/call-outgoing 1.svg"}
            alt=""
          />
          <img
            className="img-menu"
            src={process.env.PUBLIC_URL + "/images/fi-rr-life-ring 1.svg"}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default ConfirmEmail;
