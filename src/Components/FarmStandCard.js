import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import CardContent from "./CardContent";
import FarmStandModal from "./FarmStandModal";

export default function FarmStandCard({
  data,
  updateFarmStand,
  deleteFarmStand,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const buttonStyle = {
    marginTop: "auto",
    border: "none",
    backgroundColor: isHovered ? "#A58767" : "#dc5a23",
    transition: "backgroundColor 0.3s ease",
  };

  console.log("FarmStandCard Data:", data);

  return (
    <Card
      style={{
        width: "20rem",
        height: "23rem",
        margin: "10px",
        right: "20px",
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
          justifyContent: "space-between",
          width: "100%",
          padding: "10px",
        }}
      >
        {/* View More button to trigger the farm stand details 
      modal with edit/update/delete operations*/}
        <Button
          variant="secondary"
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setModalShow(true)}
        >
          View More
        </Button>
      </Card.Body>

      {/* Farm Stand Details modal */}
      <FarmStandModal
        data={data}
        updateFarmStand={updateFarmStand}
        deleteFarmStand={deleteFarmStand}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Card>
  );
}
