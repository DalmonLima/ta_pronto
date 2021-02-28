import React from "react";
import { OrdersData } from "./data";

export const Orders = () => {
  return (
    <>
      <div className="stock-container">
        {OrdersData.map((data, key) => {
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