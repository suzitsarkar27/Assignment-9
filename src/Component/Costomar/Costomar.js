import React from "react";
import "./Coustomar.css";

const Costomar = ({ data }) => {
  console.log(data);
  const { img, name, Ranting, descripton } = data;
  return (
    <div className="col-md-4 card reveiw-infro">
      <div className="review-infro">
        <img className="w-50" src={img} alt="" />
        <h3>{name}</h3>
        <h3>{Ranting}</h3>
        <p>{descripton}</p>
      </div>
    </div>
  );
};

export default Costomar;
