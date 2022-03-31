import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddToCart from "./Pages/AddToCart/AddToCart";
import FeedBack1 from "./Pages/FeedBack1/FeedBack1";
import FeedBackThankyou from "./Pages/FeedBackThankyou/FeedBackThankyou";
import Home from "./Pages/Home/Home";
import OrderCustomization from "./Pages/OrderCustomization/OrderCustomization";
import OrderTracking from "./Pages/OrderTracking/OrderTracking";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Profile from "./Pages/Profile/Profile";
import ThanksForOrder from "./Pages/ThanksForOrder/ThanksForOrder";
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
          <Route path="/thanks-for-order" element={<ThanksForOrder />}></Route>
          <Route path="/order-tracking" element={<OrderTracking />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/feedback-1" element={<FeedBack1 />}></Route>
          <Route
            path="/feedback-thankyou"
            element={<FeedBackThankyou />}
          ></Route>
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
