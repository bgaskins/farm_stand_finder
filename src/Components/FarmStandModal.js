import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function FarmStandModal({
  show,
  onHide,
  data,
  farmStandData,
  updateFarmStand,
  deleteFarmStand,
}) {
  const [editMode, setEditMode] = useState(false);
  const [updatedFood, setUpdatedFood] = useState(data?.food ?? "");
  const [updatedLocation, setUpdatedLocation] = useState(data?.location ?? "");
  const [updatedAddress, setUpdatedAddress] = useState(data?.address ?? "");

  const handleUpdate = async () => {
    try {
      await updateFarmStand({
        ...data,
        food: updatedFood,
        location: updatedLocation,
        address: updatedAddress,
      });
      setEditMode(false);
    } catch (error) {
      console.error("Error updating farm stand:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteFarmStand(data.id);
      onHide(); // Close the modal after deletion
    } catch (error) {
      console.error("Error deleting farm stand:", error);
    }
  };

  return (
    // Edit, update and delete from modal

    <Modal show={show} onHide={onHide} style={{ color: "#006e5e" }}>
      <Modal.Header closeButton>
        <Modal.Title>Farm Stand Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {editMode ? (
          <Form>
            <Form.Group controlId="formFood">
              {/* Enter new URL of image address */}
              <Form.Label>Enter Image URL:</Form.Label>
              <Form.Control
                type="text"
                value={updatedFood}
                onChange={(e) => setUpdatedFood(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formLocation">
              {/* Enter new farm stand location city or landmark */}
              <Form.Label>Enter City or Landmark:</Form.Label>
              <Form.Control
                type="text"
                value={updatedLocation}
                onChange={(e) => setUpdatedLocation(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formAddress">
              {/* Enter new address */}
              <Form.Label>Enter Street Address:</Form.Label>
              <Form.Control
                type="text"
                value={updatedAddress}
                onChange={(e) => setUpdatedAddress(e.target.value)}
              />
            </Form.Group>

            {/* Update button */}
            <Button variant="primary" onClick={handleUpdate}>
              Update
            </Button>
          </Form>
        ) : (
          <>
            <p>
              {" "}
              {/* Location seen in modal */}
              <strong>Location:</strong> {data.location}
            </p>
            <p>
              {" "}
              {/* Address seen in modal */}
              <strong>Address:</strong> {data.address}
            </p>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        {!editMode && (
          <>
            {" "}
            {/* Edit button */}
            <Button variant="secondary" onClick={() => setEditMode(true)}>
              Edit
            </Button>
            {/* Delete button */}
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </>
        )}
        {/* Close/cancel button */}
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
