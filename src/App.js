import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddToCart from "./Pages/AddToCart/AddToCart";
import Home from "./Pages/Home/Home";
import OrderCustomization from "./Pages/OrderCustomization/OrderCustomization";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import BottomNavBar from "./Shared/BottomNavBar/BottomNavBar";
import TopNavBar from "./Shared/TopNavBar/TopNavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/product-details" element={<ProductDetails />}></Route>
          <Route
            path="/order-customization"
            element={<OrderCustomization />}
          ></Route>
          <Route path="/add-to-cart" element={<AddToCart />}></Route>
        </Routes>
        <BottomNavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
