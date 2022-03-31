import React, { useState } from "react";
import "./ATCProductList.css";

const ATCProductList = () => {
  const [ProductQuantity, setProductQuantity] = useState(1);

  const QuantityDecrement = () => {
    setProductQuantity((prevCount) => prevCount - 1);
  };
  const QuantityIncrement = () => {
    setProductQuantity((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <div className="container">
        <ul className="atcProductList">
          <li className="">
            <div className="atcProductName-div">
              <img src="/images/Ellipse 1.png" alt="" />
              <p>Paneer Chowmein</p>
            </div>
            <div className="atcProductRight-div">
              <div className="atcProductQbtns-div">
                <button
                  className="input-group-text"
                  type="button"
                  onClick={QuantityDecrement}
                >
                  <i className="product-quantity-minus fa-solid fa-minus"></i>
                </button>
                <div className="input-group-text">{ProductQuantity}</div>
                <button
                  className="input-group-text"
                  type="button"
                  onClick={QuantityIncrement}
                >
                  <i className="product-quantity-plus fa-solid fa-plus"></i>
                </button>
              </div>
              <div className="atc-price-action-div ">
                <p>₹ 70</p> <i class="fa-solid fa-trash-can"></i>
              </div>
            </div>
          </li>
          <li className="">
            <div className="atcProductName-div">
              <img src="/images/Ellipse 2.png" alt="" />
              <p>Chicken Chili Boneless</p>
            </div>
            <div className="atcProductRight-div">
              <div className="atcProductQbtns-div">
                <button
                  className="input-group-text"
                  type="button"
                  onClick={QuantityDecrement}
                >
                  <i className="product-quantity-minus fa-solid fa-minus"></i>
                </button>
                <div className="input-group-text">{ProductQuantity}</div>
                <button
                  className="input-group-text"
                  type="button"
                  onClick={QuantityIncrement}
                >
                  <i className="product-quantity-plus fa-solid fa-plus"></i>
                </button>
              </div>
              <div className="atc-price-action-div ">
                <p>₹ 120</p> <i class="fa-solid fa-trash-can"></i>
              </div>
            </div>
          </li>
          <li className="">
            <div className="atcProductName-div">
              <img src="/images/Ellipse 2.png" alt="" />
              <p>Egg mughlai</p>
            </div>
            <div className="atcProductRight-div">
              <div className="atcProductQbtns-div">
                <button
                  className="input-group-text"
                  type="button"
                  onClick={QuantityDecrement}
                >
                  <i className="product-quantity-minus fa-solid fa-minus"></i>
                </button>
                <div className="input-group-text">{ProductQuantity}</div>
                <button
                  className="input-group-text"
                  type="button"
                  onClick={QuantityIncrement}
                >
                  <i className="product-quantity-plus fa-solid fa-plus"></i>
                </button>
              </div>
              <div className="atc-price-action-div ">
                <p>₹ 100</p> <i class="fa-solid fa-trash-can"></i>
              </div>
            </div>
          </li>
        </ul>
        <div>
          <button className="atc-noteAdd-btn">
            <i className="fa-solid fa-plus"></i> Add Custom Notes
          </button>
          <ul className="atc-payment-details">
            <li>
              <h3 className="bold-txt">Promo Code</h3>
              <p className="bold-txt">Apply</p>
            </li>
            <li>
              <h3>Item Total</h3>
              <p>₹ 290.00</p>
            </li>
            <li>
              <h3>Packing Charge</h3>
              <p>₹ 20.0</p>
            </li>
            <li>
              <h3>
                <span>Gst%</span>
              </h3>
              <p>₹ 14.50</p>
            </li>
            <li>
              <h3>Shop Discount</h3>
              <p>₹ 0.00</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ATCProductList;
