import React from "react";
import OCBanner from "./Components/OCBanner/OCBanner";
import Varietions from "./Components/Varietions/Varietions";

const OrderCustomization = () => {
  return (
    <div
      // style={{ height: "100vh" }}
      className="container order-customization-main "
    >
      <OCBanner />
      <Varietions />
    </div>
  );
};

export default OrderCustomization;
