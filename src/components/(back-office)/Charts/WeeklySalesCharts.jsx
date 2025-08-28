"use client";
import React, { useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

function WeeklySalesCharts() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const tabs = [
    {
      title: "Sales",
      type: "sales",
      data: {
        labels,
        datasets: [
          {
            label: "Sales",
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: "rgb(18, 167, 25)",
            backgroundColor: "rgba(12, 197, 12, 0.5)",
          },
        ],
      },
    },
    {
      title: "Orders",
      type: "orders",
      data: {
        labels,
        datasets: [
          {
            label: "Orders",
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Dataset 2",
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: "rgb(53, 162, 235)",
            backgroundColor: "rgba(53, 162, 235, 0.5)",
          },
        ],
      },
    },
  ];
  const [chartToDisplay, setChartToDiplay] = useState(tabs[0].type);
  return (
    <div className="dark:bg-slate-700 bg-slate-50 p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold dark:text-slate-100 text-slate-700  ">
        Weekly Sales
      </h2>
      {/* Tabs */}

      <div className="text-sm font-medium text-center text-slate-700 border-b border-gray-500 dark:text-gray-400 dark:border-gray-500">
        <ul className="flex flex-wrap -mb-px">
          {tabs.map((tab, i) => {
            return (
              <li className="me-2" key={tab.type}>
                <button
                  onClick={() => setChartToDiplay(tab.type)}
                  className={`${
                    chartToDisplay === tab.type
                      ? " inline-block p-4 text-orange-600 border-b-2 border-orange-600 rounded-t-lg active dark:text-orange-500 dark:border-orange-500 "
                      : " inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-slate-500 hover:border-gray-500 dark:hover:text-gray-100 "
                  }`}
                >
                  {tab.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Content to Display */}
      {tabs.map((tab, i) => {
        if (chartToDisplay === tab.type) {
          return <Line key={i} options={options} data={tab.data} />;
        }
      })}
    </div>
  );
}

export default WeeklySalesCharts;
