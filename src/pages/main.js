import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./home";
import Login from "./login";


const Main = ({setIsLogged}) => (
  <Routes>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/login" element={<Login setIsLogged={setIsLogged} />}/>
    <Route exact path="/" element={<Navigate to="/login" />}/>
  </Routes>
)

export default Main;