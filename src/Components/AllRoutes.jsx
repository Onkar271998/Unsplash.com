import { Route, Routes } from "react-router-dom";
import Explore from "./Explore";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import Signup from "./Signup";

function AllRoutes(){
    return(
        <>
            
        <Routes>
        <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/explore" element={<Explore/>}></Route>
            
        </Routes>
        </>
    )
}
export default AllRoutes;