import React from "react";
import BottomNavBar from "../../Shared/BottomNavBar/BottomNavBar";
import TopNavBar from "../../Shared/TopNavBar/TopNavBar";
import BestOffers from "./Components/BestOffers/BestOffers";
import Cards from "./Components/Cards/Cards";
import Category from "./Components/Category/Category";
import SubscribeForm from "./Components/SubscribeForm/SubscribeForm";
import TopPicked from "./Components/TopPicked/TopPicked";

const Home = () => {
  return (
    <>
      <TopNavBar />
      <div className="container">
        <Category />
        <TopPicked />
        <Cards />
        <BestOffers />
        <SubscribeForm />
      </div>
       <BottomNavBar />
    </>
  );
};

export default Home;
