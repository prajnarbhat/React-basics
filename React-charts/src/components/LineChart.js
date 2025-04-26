import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { LineChartData } from "./LineChartData";

// Register the necessary chart components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Line Chart Example"
      }
    }
  };

  return (
    <>
      <Line options={options} data={LineChartData} />
    </>
  );
};

export default LineChart;
