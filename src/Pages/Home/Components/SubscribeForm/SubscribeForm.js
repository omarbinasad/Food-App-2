import React from "react";
import "./SubscribeForm.css";

const SubscribeForm = () => {
  return (
    <div>
      <div className="subsForm-banner">
        <div>
          <h3>20% of</h3>
          <h4>Enjoy 20% discount by Subscribe our website</h4>
        </div>
        <div>
          <img src="/images/free.png" alt="" />
        </div>
      </div>
      <div className="subsForm-div">
        <form className="subsForm" action="">
          <input type="text" placeholder="Order no." />
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Mobile" />
          <button>
            Subscribe <i class="fa-solid fa-arrow-right-long"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
