import React from "react";
import ProductDetailsMain from "./Components/ProductDetailsMain/ProductDetailsMain";
import ProductDetailsTopBar from "./Components/ProductDetailsTopBar/ProductDetailsTopBar";

const ProductDetails = () => {
  return (
    <div className="container">
      <ProductDetailsTopBar />
      <ProductDetailsMain />
    </div>
  );
};

export default ProductDetails;
