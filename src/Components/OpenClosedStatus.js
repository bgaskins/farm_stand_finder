import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function VerifiedFarmStand() {
  return (
    // Circle icon turns green when farm stand is open and grey when closed
    // This functionality to be added at a later date
    <div className="open-close-stamp">
      <FontAwesomeIcon
        icon="fa-solid fa-circle"
        style={{
          color: "#65C843",
          fontSize: "20px",
          position: "absolute",
          top: "0",
          right: "0",
          margin: "10px",
        }}
      />
    </div>
  );
}
