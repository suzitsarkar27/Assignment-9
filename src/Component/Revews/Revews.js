import React from "react";
import "./Reveiw.css";
import useCostomarReviw from "../Hooks/useCostomarReviw";
import { FaStar } from "react-icons/fa";

const Revews = () => {
  const [data, setData] = useCostomarReviw([]);

  return (
    <div className="row m-5">
      {data.map((data) => (
        <div className="col-md-4 reveiw-infro card g-5">
          <img className="w-50" src={data.img} alt="" />
          <h3>{data.name}</h3>
          <p>
            <FaStar className="icon-style"></FaStar>
            <FaStar className="icon-style"></FaStar>
            <FaStar className="icon-style"></FaStar>
            <FaStar className="icon-style"></FaStar>
            <FaStar className="icon-style"></FaStar>
          </p>
          <h3>{data.Ranting}</h3>
          <p>{data.descripton}</p>
        </div>
      ))}
    </div>
  );
};

export default Revews;
