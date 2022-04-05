import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Component/About/About";
import Blogs from "./Component/Blogs/Blogs";
import Dadhbord from "./Component/Dashbord/Dadhbord";
import Header from "./Component/Header/Header";
import Home from "./Component/HOM/Home";
import NotFound from "./Component/NotFound/NotFound";
import Revews from "./Component/Revews/Revews";

const App = () => {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/revews" element={<Revews></Revews>}></Route>
        <Route path="/dashbord" element={<Dadhbord></Dadhbord>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
};

export default App;
