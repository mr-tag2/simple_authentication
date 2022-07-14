import React from "react";
const SideForm = ({ version }) => {
  return (
    <div className="img-side-container">
      {version === "3" ? (
        <div className="img-side-box top-img-side-box">
          <img
            className="img-side"
            src={process.env.PUBLIC_URL + "/images/Frame.png"}
            alt=""
          />
        </div>
      ) : (
        <div className="img-side-box top-img-side-box top-img-empty"></div>
      )}
      <div className="img-side-box main-img-side-box">
        <img
          className="img-side"
          src={
            process.env.PUBLIC_URL +
            "/images/Frame" +
            (version === "3" ? "1" : "2") +
            ".png"
          }
          alt=""
        />
      </div>
      <div className="img-side-box bottom-img-side-box">
        <img
          className="img-side"
          src={process.env.PUBLIC_URL + "/images/Group 1.png"}
          alt=""
        />
      </div>
    </div>
  );
};

export default SideForm;
