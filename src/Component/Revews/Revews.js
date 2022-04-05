import React from "react";
import useCostomarReviw from "../Hooks/useCostomarReviw";
import { FaStar } from "react-icons/fa";

const Revews = () => {
  const [data, setData] = useCostomarReviw([]);

  return (
    <div className="row">
      {data.map((data) => (
        <div className="col-md-4">name:{data.name}</div>
      ))}
      <h2>this is revews items</h2>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star-sharp"></i>
      <FaStar></FaStar>
    </div>
  );
};

export default Revews;
