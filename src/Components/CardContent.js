import React from "react";

export default function CardContent({ data }) {
  return (
    <div>
      {/* Farm stand image of choice */}
      <img
        src={data.food}
        alt={data.standName} // Alt text with farm stand Name
        style={{ width: "100%", height: "auto", maxHeight: "240px" }}
      />
      {/* Farm stand name */}
      <div>
        <h3
          style={{
            color: "#AB5B84",
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
      >
        <h5>Farm Stand Details</h5>
      </div>
    </div>
  );
}
