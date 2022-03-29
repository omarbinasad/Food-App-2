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
      <Box sx={{ width: 500, margin: "auto", padding: "40px 0px" }}>
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

                "&::after": {
                  content: "''",
                  position: "absolute",
                  width: "50px",
                  height: "15px",
                  backgroundColor: "#FF5C00",
                  borderRadius: "50% 50% 0 0",
                  transform: "translateY(180%)",
                },
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
