import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CreateModal from "./CreateModal";
import FarmStandService from "../Services/FarmStandService";

export default function CreateCard({ updateFarmStand }) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const createFarmStand = async (newFarmStand) => {
    try {
      await FarmStandService().createFarmStand(newFarmStand);
      const updatedData = await FarmStandService().getAllFarmStands();
      updateFarmStand(updatedData);
    } catch (error) {
      console.error("Error creating farm stand:", error);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Create New Farm Stand
      </Button>

      <CreateModal
        showModal={showModal}
        handleClose={handleClose}
        createFarmStand={createFarmStand}
      />
    </div>
  );
}
