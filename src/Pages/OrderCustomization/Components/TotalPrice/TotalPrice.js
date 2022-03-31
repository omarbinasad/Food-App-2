import React from "react";
import "./TotalPrice.css";

const TotalPrice = () => {
  return (
    <div className="total-price-div">
      <h3 className="text-center">Total Price: ₹25.25</h3>
      <button className="">
        Place Order <i class="fa-solid fa-arrow-right-long"></i>
      </button>
    </div>
  );
};

export default TotalPrice;
