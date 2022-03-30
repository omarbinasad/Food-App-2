import React from "react";
import "./ProductDetailsTopBar.css";
import EditIcon from "@mui/icons-material/Edit";

const ProductDetailsTopBar = () => {
  return (
    <div>
      <div className="productDetailsTopBar">
        <a>
          <i className="fa-solid fa-arrow-left-long"></i> Back
        </a>
        <button className="productDetails-customizeBtn">
          <EditIcon /> Customize
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsTopBar;
