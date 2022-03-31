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
                <p>₹ 70</p> <i className="fa-solid fa-trash-can"></i>
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
                <p>₹ 120</p> <i className="fa-solid fa-trash-can"></i>
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
                <p>₹ 100</p> <i className="fa-solid fa-trash-can"></i>
              </div>
            </div>
          </li>
        </ul>

        <div>
          {/* add custom notes start */}
          <button className="atc-noteAdd-btn">
            <i className="fa-solid fa-plus"></i> Add Custom Notes
          </button>
          {/* add custom notes end */}
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
          <ul className="atc-useWallet-div">
            <li className="atc-useWallet-input-div">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                USE WALLET
              </label>
            </li>
            <li className="atc-useWallet-text-div">
              <h3>To Pay</h3>
              <p>₹ 0.00</p>
            </li>
          </ul>
          {/* add table No start */}
          <div className="add-table-form-div">
            <form className="add-table-form">
              <label>Add Table No:( Optional)</label>
              <input
                className="add-table-form-input"
                type="text"
                placeholder="#01"
              />
            </form>
          </div>
          {/* add table No end */}
        </div>
        <div className="add-adsress-wraper">
          <div className="add-adsress-1st-half">
            <h3>HOME</h3>
            <p>
              <i className="fa-solid fa-location-dot"></i> Muzaffarpur, Bihar,
              India
            </p>
          </div>
          <div className="add-adsress-2nd-half">
            <h3>+ADD ADDRESS</h3>
          </div>
        </div>
        <div className="atc-bottom-btns-div">
          <button>Serve Now</button>
          <button>Order Online</button>
        </div>
      </div>
    </div>
  );
};

export default ATCProductList;
