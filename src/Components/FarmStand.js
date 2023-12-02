import React from "react";
import { Card } from "react-bootstrap";
import FarmStandCard from "./CardContent";
import FarmStandDetails from "./FarmStandEdit";

export default function FarmStand({ data, updateFarmStand, deleteFarmStand }) {
  return (
    <Card
      style={{
        width: "20rem",
        height: "38rem",
        margin: "10px",
        borderRadius: "10px 10px 0 0",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
    >
      <FarmStandCard data={data} />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "10px",
          overflowY: "hidden",
        }}
      >
        <FarmStandDetails
          data={data}
          updateFarmStand={updateFarmStand}
          deleteFarmStand={deleteFarmStand}
        />
      </Card.Body>
    </Card>
  );
}
