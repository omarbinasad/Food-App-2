import React from "react";
import "./SplashScreen.css";

const SplashScreen = () => {
  return (
    <div className="splashScreen-main-wraper">
      <div className="splashScreen-banner"></div>
      <div className="splashScreen-mid-half-div">
        <img className="img-fluid" src="images/ATCBanner.png" alt="" />
        <h5>Nodia, Uttar Pradesh 201302, India</h5>
      </div>
      <div className="splashScreen-bottom-div">
        <button className="splashScreen-proceed-btn">
          Proceed &nbsp; <i className="fa-solid fa-arrow-right-long"></i>
        </button>
        <p>
          Powered by - <span>SHOPHOLIC</span>
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
