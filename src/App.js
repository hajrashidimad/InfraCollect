import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./assest/global.css";
import Home from "./Components/Pages/Home";
import Live from "./Components/Pages/Live"
import MyAcount from "./Components/Pages/MyAcount";

function App() {
  return (
      <div className="app">
        <Routes> 
          <Route path="/" element={<Home/>} />
          <Route path="/Live" element={<Live/>} />
          <Route path="/MyAcount" element={<MyAcount/>} />
        </Routes>
      </div>
  );
}

export default App;
