import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./home";
import Login from "./login";


const Main = ({setIsLogged}) => (
  <Routes>
    <Route exact path="/home" element={<Home setIsLogged={setIsLogged} />}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path="/" element={<Navigate to="/login" />}/>
  </Routes>
)

export default Main;