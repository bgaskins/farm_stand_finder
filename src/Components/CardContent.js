import React from "react";
import OpenClosedStatus from "./OpenClosedStatus";

export default function CardContent({ data }) {
  return (
    <div>
      {/* Farm stand image of choice */}
      <img
        src={data.food}
        alt={data.standName} // Alt text with farm stand Name
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "240px",
          borderRadius: "10px 10px 0 0",
        }}
      />
      <OpenClosedStatus />
      {/* Farm stand name */}
      <div>
        <h3
          style={{
            color: "#006e5e",
            textAlign: "center",
            margin: "20px",
            fontSize: "18px",
            maxWidth: "400px",
            overflow: "hidden",
          }}
        >
          {/* Farm stand name from API */}
          {data.standName} Farm Stand
        </h3>
      </div>
      <div
        style={{
          textAlign: "center",
        }}
      ></div>
    </div>
  );
}
