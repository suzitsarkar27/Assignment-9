import React from "react";
import logo from "..//..//imgse/71IyteItZhL._AC_SL1500_.jpg";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-6 text-center">
          <div className="product-infro ms-4 w-75">
            <h2> HP Pavilion 15-cs3000TU</h2>
            <h3> Core i5 10th Gen 8GB 256GB SSD</h3>
            <h3>15.6" Full HD Laptop with Windows 10</h3>

            <p>
              If you want to buy HP Pavilion 15-cs3000tu Laptop we will be your
              first choice, because we are the only one who offering the right
              product at the lowest price in Bangladesh.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img className="w-100  mt-5" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
