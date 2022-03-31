import React from "react";
import BottomNavBar from "../../Shared/BottomNavBar/BottomNavBar";
import ProductDetailsMain from "./Components/ProductDetailsMain/ProductDetailsMain";
import ProductDetailsTopBar from "./Components/ProductDetailsTopBar/ProductDetailsTopBar";

const ProductDetails = () => {
  return (
    <div className="">
      <ProductDetailsTopBar />
      <ProductDetailsMain />
      <BottomNavBar />
    </div>
  );
};

export default ProductDetails;
