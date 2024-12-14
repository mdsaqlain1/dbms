import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div style={{display:"flex", backgroundColor:"blanchedalmond"}}>
        <div>
            <h2>Bar Chart</h2>
        </div>
        <div style={{margin:"00px"}}>
            <Bar data={data} />
        </div>
    </div>
  );
};

export default BarChart;