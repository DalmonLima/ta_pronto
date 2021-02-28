import React from "react";
import "./App.css";
import { stockData } from "./data";

export const Orders = () => {
  return (
    <>
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              {data.name +
                " , " +
                data.contact +
                " ," +
                data.order +
                ", " +
                data.status}
            </div>
          );
        })}
      </div>
    </>
  );
};