import React from "react";

export default function FarmStandCard({ data }) {
  return (
    <div>
      {/* Farm stand image of choice */}
      <img
        src={data.food}
        alt={data.standName} // Alt text with farm stand Name
        style={{ width: "100%", height: "auto", maxHeight: "240px" }}
      />
      {/* Farm stand name */}
      <h3
        style={{
          color: "#007BFF",
          textAlign: "center",
          margin: "20px",
          fontSize: "18px",
          maxWidth: "400px",
          overflow: "hidden",
        }}
      >
        {data.standName} Farm Stand
      </h3>
    </div>
  );
}
