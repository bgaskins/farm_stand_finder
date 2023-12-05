import React from "react";
import { Card } from "react-bootstrap";
import CardContent from "./CardContent";
import FarmStandEdit from "./FarmStandEdit";

export default function FarmStandCard({
  data,
  updateFarmStand,
  deleteFarmStand,
}) {
  return (
    <Card
      style={{
        width: "20rem",
        height: "34rem",
        margin: "10px",
        borderRadius: "10px 10px 10px 10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#e9f4f9",
        overflow: "hidden",
      }}
    >
      <CardContent data={data} />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "10px",
          overflowY: "scroll",
        }}
      >
        <FarmStandEdit
          data={data}
          updateFarmStand={updateFarmStand}
          deleteFarmStand={deleteFarmStand}
        />
      </Card.Body>
    </Card>
  );
}
