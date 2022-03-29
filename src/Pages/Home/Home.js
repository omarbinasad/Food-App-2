import React from "react";
import Cards from "./Components/Cards/Cards";
import Category from "./Components/Category/Category";
import TopPicked from "./Components/TopPicked/TopPicked";

const Home = () => {
  return (
    <div className="container">
      <Category />
      <TopPicked />
      <Cards />
    </div>
  );
};

export default Home;
