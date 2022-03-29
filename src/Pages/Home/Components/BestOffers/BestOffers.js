import React from "react";
import "./BestOffers.css";

const BestOffers = () => {
  return (
    <div className="container">
      <div className="bestOffers-title-div">
        <h3 className="bestOffers-title text-start or-divider">Best Offers</h3>
        <a href="/">See all</a>
      </div>
      <div className="bestOffers-div">
        <div className="active">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default BestOffers;
