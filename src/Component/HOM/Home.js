import logo from "..//..//imgse/71IyteItZhL._AC_SL1500_.jpg";
import Costomar from "../Costomar/Costomar";
import useCostomarReviw from "../Hooks/useCostomarReviw";

import "./Home.css";
const Home = () => {
  const [data, setData] = useCostomarReviw([]);
  let array = data.slice(0, 3);
  console.log(data);
  return (
    <div>
      <div className="row">
        <div className="col-md-6 text-center">
          <div className="product-infro ms-4 w-75 ">
            <h2> HP Pavilion 15-cs3000TU</h2>
            <h2> Core i5 10th Gen 8GB 256GB SSD</h2>
            <h2>15.6" Full HD Laptop with Windows 10</h2>

            <h6>
              If you want to buy HP Pavilion 15-cs3000tu Laptop we will be your
              first choice, because we are the only one who offering the right
              product at the lowest price in Bangladesh.
            </h6>
          </div>
          <button className="btn-style"> Live Demo</button>
        </div>
        <div className="col-md-6">
          <img className="w-75  mt-5" src={logo} alt="" />
        </div>
      </div>
      <div className=" mt-5 row m-5">
        <h2 className="text-center coustomar-container ">
          Coustomar<span className="text-danger"> Reviews</span>
        </h2>
        {array.map((data) => (
          <Costomar data={data}></Costomar>
        ))}
      </div>
      <div className="text-center">
        <button className="btn-style">SEE ALL</button>
      </div>
    </div>
  );
};

export default Home;
