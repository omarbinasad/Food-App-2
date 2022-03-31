import React from "react";
import "./FeedBackThankyou.css";

const FeedBackThankyou = () => {
  return (
    <div>
      <div className="feedBack-banner"></div>
      <div className="feedBack-half-div-wraper">
        <img className="fb-thnq-img" src="images/thanqImg.png" alt="" />
        <h3 className="fb-thnq-title">Thanks for your feedback!</h3>
        <p className="fb-thnq-desc"></p>

        <button className="feedBack-close-btn">
          SEND <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </div>
  );
};

export default FeedBackThankyou;
