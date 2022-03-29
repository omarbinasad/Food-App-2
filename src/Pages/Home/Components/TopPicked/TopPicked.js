import React from "react";
import "./TopPicked.css";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

const TopPicked = () => {
  return (
    <div className="container">
      <div className="topPicked-title-div">
        <h3 className="topPicked-title text-start or-divider">Top Picked</h3>
      </div>
      <div className="topPicked-toggles-div">
        <FormControlLabel
          control={<Switch color="warning" />}
          label="Spicy"
          labelPlacement="start"
        />
        <FormControlLabel
          control={<Switch defaultChecked color="warning" />}
          label="Non Veg"
          labelPlacement="start"
        />
      </div>
    </div>
  );
};

export default TopPicked;
