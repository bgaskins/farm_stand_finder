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
        <Button
          variant="secondary"
          style={{ marginTop: "10px" }}
          onClick={() => setModalShow(true)}
        >
          View More
        </Button>
      </Card.Body>

      {/* Farm Stand Details Modal */}
      <FarmStandModal
        data={data}
        updateFarmStand={updateFarmStand}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Card>
  );
}
