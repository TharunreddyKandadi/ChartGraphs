import { Line, Chart } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import React, { useContext } from "react";
import { store } from "./ContextApi";
export default function LineChart() {
  const Data = useContext(store);

  return (
    <div style={{ height: "800px", width: "1000px" }}>
      <Line data={Data} />
    </div>
  );
}
