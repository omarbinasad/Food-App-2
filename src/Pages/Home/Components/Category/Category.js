import React from "react";
import "./Category.css";

const Category = () => {
  return (
    <div className="container">
      <div className="category-title-div">
        <h3 className="category-title text-start or-divider">Category</h3>
      </div>
      <div className="categories-div">
        <p className="active">Special Menu</p>
        <p>Lunch</p>
        <p>Breakfast</p>
      </div>
    </div>
  );
};

export default Category;
