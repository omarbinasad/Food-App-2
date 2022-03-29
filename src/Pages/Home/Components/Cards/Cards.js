import React from "react";
import SingleCard from "./singleCard.js/SingleCard";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cards-div">
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
      <SingleCard />
    </div>
  );
};

export default Cards;
