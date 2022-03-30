import React from "react";
import "./TopNavBar.css";
import Badge from "@mui/material/Badge";
const TopNavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-default bg-light">
        <div className="TopNavBarWraper container-fluid">
          <form className="d-flex has-search">
            <i className="fa fa-search form-control-feedback"></i>
            <input
              className="TopNavSearchBar form-control me-2"
              type="search"
              placeholder="Search food..."
              aria-label="Search"
            />
          </form>
          <div className="TopNavIconsDiv">
            <i class="fa-solid fa-qrcode"></i>

            <Badge badgeContent={3} size="small" color="warning">
              <i class="fa-solid fa-cart-shopping"></i>
            </Badge>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNavBar;
