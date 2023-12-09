import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CreateModal from "./CreateModal";
import FarmStandService from "../Services/FarmStandService";
import { useAuth } from "../Auth/AuthContext"; // Import the useAuth hook

export default function CreateCard({ updateFarmStand }) {
  const [showModal, setShowModal] = useState(false);
  const { isAuthenticated } = useAuth();

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

  const buttonStyle = {
    backgroundColor: "gold",
    color: "#006e5e",
    fontWeight: "700",
  };

  return (
    <div>
      {/* Conditionally render the button based on authentication status */}
      {isAuthenticated && (
        <Button style={buttonStyle} onClick={handleShow}>
          Create New Farm Stand
        </Button>
      )}

      <CreateModal
        showModal={showModal}
        handleClose={handleClose}
        createFarmStand={createFarmStand}
      />
    </div>
  );
}
