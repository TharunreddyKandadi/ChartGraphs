import "./styles.css";
import React from "react";
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavBar from "./NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <BarChart /> },
      { path: "/piechart", element: <PieChart /> },
      { path: "/linechart", element: <LineChart /> }
    ]
  }
]);
export default function App() {
  return <RouterProvider router={router} />;
}
