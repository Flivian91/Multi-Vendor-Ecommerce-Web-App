"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
function BestSellingProductsCharts() {
  const data = {
    labels: ["Cabbage", "WaterMelon", "Orange", "Broccoli"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 16, 20],
        backgroundColor: [
          "#0ccf1c",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "#00ee4f",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="dark:bg-slate-700 bg-slate-50 p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">
        Best Seling Products
      </h2>
      {/* Chart */}
      <div>
        <Pie data={data} options={{ responsive: true }} />
      </div>
    </div>
  );
}

export default BestSellingProductsCharts;
