import React from "react";
import OCBanner from "./Components/OCBanner/OCBanner";
import SelectedItems from "./Components/SelectedItems/SelectedItems";
import TotalPrice from "./Components/TotalPrice/TotalPrice";
import Varietions from "./Components/Varietions/Varietions";

const OrderCustomization = () => {
  return (
    <div
      // style={{ height: "100vh" }}
      className="container order-customization-main "
    >
      <OCBanner />
      <Varietions />
      <SelectedItems />
      <TotalPrice />
    </div>
  );
};

export default OrderCustomization;
