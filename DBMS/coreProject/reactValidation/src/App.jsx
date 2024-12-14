import React from "react";
import Registration from "./components/Registration";
import Otp from "./components/Otp";
import Loading from "./components/Loading";
import Landing from "./components/Landing/LandingPage";
import Login from "./components/Login";

import History from "./components/History/History"

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BarChart from "./components/BarChart";
import Dashboard from "./components/Home/components/Dashboard";
import Water from "./components/Home/Water/Water";
import Electricty from "./components/Home/Electricity/Electricity";
import Fuel from "./components/Home/Fuel/Fuel";
import HomeLand from "./components/HomeLand/Home";
import Graph from "./GraphComponent/Graph.jsx";
import Blog from "./Blog/Blog.jsx";

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/blog" element = {<Blog/>}/>
      <Route path="/register" element = {<Registration/>}/>
      <Route path="/otp/:otp" element = {<Otp/>}/>
      <Route path="/loading" element = {<Loading/>}/>
      <Route path="/" element = {<Landing/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/chart" element = {<BarChart/>}/>
      <Route path="/home" element = {<Dashboard/>}>
        <Route path="/home/chart" element={<Graph/>}></Route>
        <Route path="/home/history" element={<History/>}></Route>
        <Route path="/home/homeland" element={<HomeLand/>}></Route>
        <Route path="/home/water" element={<Water/>}></Route>
        <Route path="/home/fuel" element={<Fuel/>}></Route>
        <Route path="/home/electricity" element={<Electricty/>}></Route>
      </Route>
    </Routes>
  </Router>
  );
};

export default App;
