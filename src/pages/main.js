import { Routes, Route } from "react-router-dom";

import Home from "./home";
import About from "./about";


const Main = () => (
  <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>}/>
  </Routes>
)

export default Main;