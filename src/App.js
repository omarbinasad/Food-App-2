import "./App.css";
import Home from "./Pages/Home/Home";
import BottomNavBar from "./Shared/BottomNavBar/BottomNavBar";
import TopNavBar from "./Shared/TopNavBar/TopNavBar";

function App() {
  return (
    <div className="App">
      <TopNavBar />
      <Home />
      <BottomNavBar />
    </div>
  );
}

export default App;
