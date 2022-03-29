import React from "react";
import "./TopNavBar.css";
const TopNavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-default bg-light">
        <div className="container-fluid">
          <form className="d-flex has-search">
            <i class="fa fa-search form-control-feedback"></i>
            <input
              className="TopNavSearchBar form-control me-2"
              type="search"
              placeholder="Search food..."
              aria-label="Search"
            />
          </form>
          <div className="TopNavIconsDiv">
            <i class="fa-solid fa-qrcode"></i>
            <i class="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNavBar;
