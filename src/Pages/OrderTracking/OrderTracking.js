import React from "react";
import { Link } from "react-router-dom";
import "./OrderTracking.css";
const OrderTracking = () => {
  return (
    <div>
      <div className="container order-tracking-top-bar">
        <Link to="/">
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </Link>
      </div>
      <div className="order-tracking-main-wraper container">
        <h2>Order Tracking</h2>
        <h3>Your food is "On the way"</h3>
        <ul className="order-progress-wraper">
          <li>
            <img
              className="img-fluid"
              src="images/cooking.png"
              id="progress-img"
              alt=""
            />
            <p>Cooking</p>
          </li>
          <span>
            <img className="img-fluid" src="images/Line.png" alt="" />
          </span>
          <li>
            <div className="bike-img-div">
              <img className="img-fluid" src="images/motorbike.png" alt="" />
            </div>
            <p>On the way</p>
          </li>
          <span>
            <img className="img-fluid" src="images/Line.png" alt="" />
          </span>
          <li>
            <img className="img-fluid" src="images/delivery.png" alt="" />
            <p>Delivery</p>
          </li>
        </ul>
        <div>
          <img className="img-fluid" src="images/deliveryman.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
