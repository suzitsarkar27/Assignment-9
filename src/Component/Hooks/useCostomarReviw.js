import { useEffect, useState } from "react";
const useCostomarReviw = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("FeactData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return [data, setData];
};
export default useCostomarReviw;
