import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import CardContent from "./CardContent";
import FarmStandModal from "./FarmStandModal";
import FarmStandEdit from "./FarmStandEdit";

export default function FarmStandCard({
  data,
  updateFarmStand,
  deleteFarmStand,
}) {
  const [modalShow, setModalShow] = useState(false);
  console.log("FarmStandCard Data:", data);

  return (
    <Card
      style={{
        width: "20rem",
        height: "25rem",
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
          justifyContent: "space-between",
          width: "100%",
          padding: "10px",
        }}
      >
        {/* View More button to trigger the farm stand details 
      modal with edit/update/delete operations*/}
        <Button
          variant="secondary"
          style={{
            marginTop: "auto",
            border: "none",
            backgroundColor: "#dc5a23",
          }}
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
