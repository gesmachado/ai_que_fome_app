import { Routes, Route } from "react-router-dom";

import Home from "./home";
import Login from "./login";


const Main = () => (
  <Routes>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/login" element={<Login/>}/>
  </Routes>
)

export default Main;