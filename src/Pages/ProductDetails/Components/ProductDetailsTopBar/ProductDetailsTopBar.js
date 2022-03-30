import React from "react";
import "./ProductDetailsTopBar.css";

const ProductDetailsTopBar = () => {
  return (
    <div>
      <div>
        <a>
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </a>
        <button className="productDetails-customizeBtn">Customize</button>
      </div>
    </div>
  );
};

export default ProductDetailsTopBar;
