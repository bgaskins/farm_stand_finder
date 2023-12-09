import React from "react";
import HelpAccordion from "../Components/HelpAccordion";

export default function Help() {
  return (
    <div
      className="help"
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        top: "50px",
        textAlign: "center",
        height: "100vh",
        color: "#4CAF50",
      }}
    >
      <h2>Help</h2>
      {/* Help accordion / FAQ */}
      <HelpAccordion />
    </div>
  );
}
