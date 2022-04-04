import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav className="d-flex justify-content-between bg-success p-4 align-items-center ">
      <div>
        <h4 className="text-white">LOGO</h4>
      </div>
      <div className="me-5 header-style">
        <Link className=" menu-style" to={"/"}>
          HOME
        </Link>
        <Link className=" menu-style" to={"/revews"}>
          REVEWS
        </Link>
        <Link className="menu-style" to={"/dashbord"}>
          DASHBORD
        </Link>
        <Link className=" menu-style" to={"/blogs"}>
          BLOGS
        </Link>
        <Link className=" menu-style" to={"/about"}>
          ABOUT
        </Link>
      </div>
    </nav>
  );
};

export default Header;
