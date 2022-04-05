import React from "react";
import "./Coustomar.css";
import { FaStar } from "react-icons/fa";
const Costomar = ({ data }) => {
  const { img, name, Ranting, descripton } = data;
  return (
    <div className="reveiw-infro col-md-4 card g-3">
      <div className="m-4">
        <img className="w-50" src={img} alt="" />
        <h3>{name}</h3>
        <p>
          <FaStar className="icon-style"></FaStar>
          <FaStar className="icon-style"></FaStar>
          <FaStar className="icon-style"></FaStar>
          <FaStar className="icon-style"></FaStar>
          <FaStar className="icon-style"></FaStar>
        </p>
        <h3>{Ranting}</h3>
        <p>{descripton}</p>
      </div>
    </div>
  );
};

export default Costomar;
