import React from "react";
import "./BottomNavBar.css";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const BottomNavBar = () => {
  const [value, setValue] = React.useState(0);
  return (
    <div className="BottomNavBar-main-div">
      <Box sx={{ width: 500, margin: "auto" }}>
        <BottomNavigation
          sx={{
            color: "#7C90B8",
          }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            sx={{
              color: "#7C90B8",
              "&.Mui-selected": {
                color: "#FF5C00",
              },
            }}
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            sx={{
              color: "#7C90B8",
              "&.Mui-selected": {
                color: "#FF5C00",
              },
            }}
            label="Search"
            icon={<SearchIcon />}
          />
          <BottomNavigationAction
            sx={{
              color: "#7C90B8",
              "&.Mui-selected": {
                color: "#FF5C00",
              },
            }}
            label="Cart"
            icon={<ShoppingCartIcon />}
          />
          <BottomNavigationAction
            sx={{
              color: "#7C90B8",
              "&.Mui-selected": {
                color: "#FF5C00",
              },
            }}
            label="Profile"
            icon={<AccountCircleIcon />}
          />
        </BottomNavigation>
      </Box>
    </div>
  );
};

export default BottomNavBar;
