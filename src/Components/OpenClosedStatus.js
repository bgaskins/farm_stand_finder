import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function VerifiedFarmStand() {
  return (
    <div className="open-close-stamp">
      <FontAwesomeIcon
        icon="fa-solid fa-circle"
        style={{
          color: "green",
          fontSize: "30px",
          position: "absolute",
          top: "0",
          right: "0",
          margin: "10px",
        }}
      />
    </div>
  );
}
