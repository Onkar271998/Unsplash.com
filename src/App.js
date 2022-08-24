import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Searchbox from "./Components/Searchbox";
import AllRoutes from "./Components/AllRoutes";
import Home from "./Components/Home";
import MiddleHome from "./Components/MiddleHome";

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      {/* <Navbar /> */}
      {/* <MiddleHome/>
      <Home/> */}
    </div>
  );
}

export default App;
