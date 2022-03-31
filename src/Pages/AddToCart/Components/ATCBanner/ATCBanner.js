import React from "react";
import "./ATCBanner.css";

const ATCBanner = () => {
  return (
    <div>
      <div className="atc-banner">
        <img className="img-fluid" src="/images/ATCBanner.png" alt="" />
      </div>
      <div className="container">
        <div className="atc-title-div">
          <h3 className="atc-title or-divider">Nat Fast Food</h3>
          <p>Main City</p>
        </div>
      </div>
    </div>
  );
};

export default ATCBanner;
