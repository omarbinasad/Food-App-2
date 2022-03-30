import React, { useState } from "react";
import "./ProductDetailsMain.css";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";

const ProductDetailsMain = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    setQuantity((prevCount) => prevCount - 1);
  };
  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
  };
  return (
    <div className="productDetails-main">
      <div className="productDetails-main-img-div">
        <img className="img-fluid" src="/images/foodImg2.png" alt="food-img" />
      </div>
      <div className="productDetails-main-contents-div">
        <h3 className="productDetails-main-contents-title">
          Chicken Curry with Rice
        </h3>
        <div className="productDetails-main-contents-span-div">
          <span>
            <img src="/images/counter.png" alt="" /> 30 min
          </span>
          <span>
            <img src="/images/fire.png" alt="" /> 275 calories
          </span>
          <span>
            <img src="/images/star.png" alt="" /> 4.9
          </span>
        </div>
        <p className="productDetails-main-contents-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been.
        </p>
        <div className="d-flex gap-4 align-items-center input-group">
          <div className="product-quantity-btns-div">
            <button
              className="input-group-text"
              type="button"
              onClick={handleDecrement}
            >
              <i className="product-quantity-minus fa-solid fa-minus"></i>
            </button>
            <div className="input-group-text">{quantity}</div>
            <button
              className="input-group-text"
              type="button"
              onClick={handleIncrement}
            >
              <i className="product-quantity-plus fa-solid fa-plus"></i>
            </button>
          </div>
          <div>
            <button className="addToCart-btn">
              <AddShoppingCartOutlinedIcon /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsMain;
