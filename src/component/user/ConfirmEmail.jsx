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
    if (value != "0000") {
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
      <h6 className="col-7">
        مطئمن باشین این یه متن از پیش آماده شده نیست ، ما خیلی خوشحالیم که شما
        از امروز همراه ما هستی ، قطعا قول میدیم هر روز شما هم اینطوری خوب و خوش
        باشه چون تلاشمون اینه که کنار خلق ارزش ، حس خوبی هم از کار با محصولات ما
        دریافت کنید و از اون گذشته ، ما دوست داریم شما در کسب و کارتون به اوج
        برسید . زود باشین برین از ایمیلتون کد فعالسازی حساب رو بردارین و
        ماجرجویی هاتون رو در سگمنتو شروع کنید . (اگرم دیدین ایمیلی نیومده، مجددا
        درخواست بدین، کامپیوتر ها خیلی هم باهوش نیستن وممکنه اشتباه کرده باشن
        😉)
      </h6>
      <form className="col-7 div-confirm-email" onSubmit={confirmHandler}>
        <label className="col-12">
          <b>کد فعال سازی</b>
        </label>
        <div className="col-9 row div-confirm-email mb-2">
          <input
            type="text"
            onChange={(e) => {
              setFirstCode(e.target.value);
            }}
            value={firstCode}
            maxLength="1"
            className="form-control col-1 text-center"
          />
          <input
            type="text"
            onChange={(e) => {
              setSecondCode(e.target.value);
            }}
            value={secondCode}
            maxLength="1"
            className="form-control col-1 mr-2 text-center"
          />
          <input
            type="text"
            onChange={(e) => {
              setThirdCode(e.target.value);
            }}
            value={thirdCode}
            maxLength="1"
            className="form-control col-1 mr-2 text-center"
          />
          <input
            type="text"
            onChange={(e) => {
              setFourthCode(e.target.value);
            }}
            value={fourthCode}
            maxLength="1"
            className="form-control col-1 mr-2 text-center"
          />
        </div>
        <div className="col-12 row">
          <div className="col-3"></div>
          <div className="col-6 ">
            <input
              type="submit"
              className="col-4 btn btn-primary"
              value="تایید ایمیل"
            />
          </div>
          <div className="col-3  forget-text">
            <a className="cursor-pointer" onClick={getCodeNumber}>
              دریافت مجدد ایمیل
            </a>
          </div>
        </div>
      </form>
      <div className="col-7 div-confirm-email mt-5">
        <div className="col-7">
          <img
            className="img-menu"
            src={process.env.PUBLIC_URL + "/images/call-outgoing 1.svg"}
            alt=""
          />
          <img
            className="img-menu"
            src="/images/fi-rr-life-ring 1.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
export default ConfirmEmail;
