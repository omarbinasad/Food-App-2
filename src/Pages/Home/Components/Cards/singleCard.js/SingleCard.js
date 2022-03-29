import React from "react";
import "./SingleCard.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const SingleCard = () => {
  return (
    <div className="SingleCard">
      <div className="card-top">
        <p>Kashmiri Chicken Biryani</p>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      <div className="card-middle">
        <div className="card-middle-rating-div">
          <i className="fa-solid fa-star"></i>
          <h5>
            4<span>/5</span>
          </h5>
        </div>
        <div className="card-middle-img-div">
          <img src="/images/foodImg.png" alt="" />
        </div>
      </div>
      <div className="card-bottom">
        <h3>₹95.00</h3>
        <button className="card-bottom-btn">
          <i class="fa-solid fa-arrow-right-long"></i>
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
