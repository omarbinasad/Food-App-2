import React from "react";
import "./BestOffers.css";

const BestOffers = () => {
  return (
    <div className="container">
      <div className="bestOffers-title-div">
        <h3 className="bestOffers-title text-start or-divider">Best Offers</h3>
        <a href="/">See all</a>
      </div>
      <div className="bestOffers-div-main">
        <div className="bestOffer-div">
          <div className=" bestOffers-img-div">
            <img src="/images/bestoffer.png" alt="" />
          </div>
          <div className=" bestOffers-text-div">
            <p>
              Get Fresh <br /> Start At 50/- <br /> only
            </p>
          </div>
          <div className=" bestOffers-btn-div">
            <button className="bestOffers-btn">
              <i class="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BestOffers;
