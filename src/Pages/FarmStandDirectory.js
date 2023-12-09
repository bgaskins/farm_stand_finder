import React from "react";
import FarmStandList from "../Components/FarmStandList";

export default function FarmStandDirectory() {
  return (
    <div className="farm-stand-directory">
      <h2 className="text-center m-5" style={{ color: "#4CAF50" }}>
        Farm Stand Directory
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        {/* List of ALL farm stands available from the API */}
        <FarmStandList />
      </div>
    </div>
  );
}
