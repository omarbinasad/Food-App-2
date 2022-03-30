import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
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
        </Routes>
        <BottomNavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
