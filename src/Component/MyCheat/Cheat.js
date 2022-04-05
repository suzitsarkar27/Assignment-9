import React from "react";
import "./Mycheat.css";
import { LineChart, Line } from "recharts";
import { XAxis, YAxis, Tooltip } from "recharts";
import { PieChart, Pie } from "recharts";

const Cheat = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="cheart-data col-md-6">
      <LineChart width={400} height={400} data={data}>
        <Line dataKey=" revenue" stroke="#8884d8" />
        <Line dataKey="sell" stroke="#8884d8" />
        <Line dataKey=" revenue" stroke="#8884d8" />
        <XAxis dataKey={"month"}></XAxis>
        <YAxis> </YAxis>
        <Tooltip />
      </LineChart>

      <PieChart width={400} height={400}>
        <Pie
          dataKey="investment"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Cheat;
