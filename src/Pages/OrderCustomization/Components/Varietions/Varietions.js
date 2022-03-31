import React from "react";
import "./Varietions.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      className="varietions-main"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Varietions = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 0 }}>
          <Tabs
            sx={{
              // display: "flex",
              // justifyContent: "center",
              // alignItems: "center",
              backgroundColor: "#FF5C00",
            }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="white"
            centered
            TabIndicatorProps={{
              style: {
                backgroundImage: "url('/images/varietionsCurv.png')",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "105px",
                height: "62px",
                marginBottom: "-14px",
                border: "none",
                backgroundColor: "transparent",
              },
            }}
          >
            <Tab
              label="Large"
              sx={{ margin: "50px 0px", color: "#fff" }}
              icon={
                <img width="80px" alt="test avatar" src="images/burger1.png" />
              }
              aria-label="phone"
            />
            <Tab
              label="Regular"
              sx={{ margin: "50px 0px", color: "#fff" }}
              icon={
                <img width="80px" alt="test avatar" src="images/burger2.png" />
              }
              aria-label="phone"
            />
            <Tab
              label="Double"
              sx={{ margin: "50px 0px", color: "#fff" }}
              icon={
                <img width="80px" alt="test avatar" src="images/burger3.png" />
              }
              aria-label="phone"
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ul className="varietions-item-list">
            <li className="varietions-item">
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#DF0000",

                  "&:hover": {
                    backgroundColor: "#DF0000",
                  },
                }}
                aria-label="add"
              >
                <RemoveIcon />
              </Fab>
              <p>
                Extra Vegetables<span> (₹10)</span>
              </p>
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#3B9D23",
                  "&:hover": {
                    backgroundColor: "#3B9D23",
                  },
                }}
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </li>
            <li className="varietions-item">
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#DF0000",
                  "&:hover": {
                    backgroundColor: "#DF0000",
                  },
                }}
                aria-label="add"
              >
                <RemoveIcon />
              </Fab>
              <p>
                Bacon<span> (₹10)</span>
              </p>
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#3B9D23",
                  "&:hover": {
                    backgroundColor: "#3B9D23",
                  },
                }}
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </li>
            <li className="varietions-item">
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#DF0000",
                  "&:hover": {
                    backgroundColor: "#DF0000",
                  },
                }}
                aria-label="add"
              >
                <RemoveIcon />
              </Fab>
              <p>
                Onion Rings<span> (₹10)</span>
              </p>
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#3B9D23",
                  "&:hover": {
                    backgroundColor: "#3B9D23",
                  },
                }}
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </li>
            <li className="varietions-item">
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#DF0000",
                  "&:hover": {
                    backgroundColor: "#DF0000",
                  },
                }}
                aria-label="add"
              >
                <RemoveIcon />
              </Fab>
              <p>
                Chees<span> (₹10)</span>
              </p>
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#3B9D23",
                  "&:hover": {
                    backgroundColor: "#3B9D23",
                  },
                }}
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </li>
            <li className="varietions-item">
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#DF0000",
                  "&:hover": {
                    backgroundColor: "#DF0000",
                  },
                }}
                aria-label="add"
              >
                <RemoveIcon />
              </Fab>
              <p>
                BBQ Sauce<span> (₹10)</span>
              </p>
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#3B9D23",
                  "&:hover": {
                    backgroundColor: "#3B9D23",
                  },
                }}
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ul className="varietions-item-list">
            <li className="varietions-item">
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#DF0000",

                  "&:hover": {
                    backgroundColor: "#DF0000",
                  },
                }}
                aria-label="add"
              >
                <RemoveIcon />
              </Fab>
              <p>
                Extra Vegetables<span> (₹10)</span>
              </p>
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#3B9D23",
                  "&:hover": {
                    backgroundColor: "#3B9D23",
                  },
                }}
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </li>
            <li className="varietions-item">
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#DF0000",
                  "&:hover": {
                    backgroundColor: "#DF0000",
                  },
                }}
                aria-label="add"
              >
                <RemoveIcon />
              </Fab>
              <p>
                Bacon<span> (₹10)</span>
              </p>
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#3B9D23",
                  "&:hover": {
                    backgroundColor: "#3B9D23",
                  },
                }}
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ul className="varietions-item-list">
            <li className="varietions-item">
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#DF0000",

                  "&:hover": {
                    backgroundColor: "#DF0000",
                  },
                }}
                aria-label="add"
              >
                <RemoveIcon />
              </Fab>
              <p>
                Extra Vegetables<span> (₹10)</span>
              </p>
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#3B9D23",
                  "&:hover": {
                    backgroundColor: "#3B9D23",
                  },
                }}
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </li>
            <li className="varietions-item">
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#DF0000",
                  "&:hover": {
                    backgroundColor: "#DF0000",
                  },
                }}
                aria-label="add"
              >
                <RemoveIcon />
              </Fab>
              <p>
                Bacon<span> (₹10)</span>
              </p>
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#3B9D23",
                  "&:hover": {
                    backgroundColor: "#3B9D23",
                  },
                }}
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </li>

            <li className="varietions-item">
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#DF0000",
                  "&:hover": {
                    backgroundColor: "#DF0000",
                  },
                }}
                aria-label="add"
              >
                <RemoveIcon />
              </Fab>
              <p>
                BBQ Sauce<span> (₹10)</span>
              </p>
              <Fab
                sx={{
                  color: "white",
                  backgroundColor: "#3B9D23",
                  "&:hover": {
                    backgroundColor: "#3B9D23",
                  },
                }}
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </li>
          </ul>
        </TabPanel>
      </Box>
    </div>
  );
};

export default Varietions;
