import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./assest/global.css";
import Home from "./Components/Pages/Home";
import Live from "./Components/Pages/Live"
import SignUp from "./Components/Pages/SignUp";
import Login from "./Components/Pages/Login";

function App() {
  return (
      <div className="app">
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/Live" element={<Live/>} />
          <Route path="/Log-in" element={<Login/>} />
          <Route path="/Sign-up" element={<SignUp/>} />
          <Route path="/Logout" element={<Home/>} />
        </Routes>
      </div>
  );
}

export default App;
