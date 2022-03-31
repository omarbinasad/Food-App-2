import React from "react";
import "./ThanksForOrder.css";

const ThanksForOrder = () => {
  return (
    <div>
      <div className="container tfo-wraper">
        <h3>Thanks for Order</h3>
        <img className="img-fluid" src="/images/check.png" alt="check-img" />
        <h2>Your Order is Successfully placed.</h2>
        <p>Your Order Number is 8077</p>
        <button className="tfo-order-detail-btn">
          ORDER DETAIL <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </div>
  );
};

export default ThanksForOrder;
