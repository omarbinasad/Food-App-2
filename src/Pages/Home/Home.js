import React from "react";
import BestOffers from "./Components/BestOffers/BestOffers";
import Cards from "./Components/Cards/Cards";
import Category from "./Components/Category/Category";
import TopPicked from "./Components/TopPicked/TopPicked";

const Home = () => {
  return (
    <div className="container">
      <Category />
      <TopPicked />
      <Cards />
      <BestOffers />
    </div>
  );
};

export default Home;
