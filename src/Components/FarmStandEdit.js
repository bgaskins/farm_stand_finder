import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function FarmStandEdit({
  data,
  updateFarmStand,
  deleteFarmStand,
}) {
  // State variables for managing edit mode and updated input values
  const [editMode, setEditMode] = useState(false);
  const [updatedFood, setUpdatedFood] = useState(data?.food ?? "");
  const [updatedLocation, setUpdatedLocation] = useState(data?.location ?? "");
  const [updatedAddress, setUpdatedAddress] = useState(data?.address ?? "");

  // Function to handle updating the farm stand details
  const handleUpdate = async () => {
    try {
      // Call the updateFarmStand function with the updated fields (food, location, address)
      await updateFarmStand({
        ...data,
        food: updatedFood,
        location: updatedLocation,
        address: updatedAddress,
      });
      // Exit edit mode after a successful update
      setEditMode(false);
    } catch (error) {
      console.error("Error updating farm stand:", error);
    }
  };

  // Function to handle deleting a specific farm stand and its info
  const handleDelete = async () => {
    try {
      // Call the deleteFarmStand function with the farm stand ID
      await deleteFarmStand(data.id);
    } catch (error) {
      console.error("Error deleting farm stand:", error);
    }
  };

  return (
    <div className="farm-stand-details" style={{ maxHeight: "12px" }}>
      {/* Conditional rendering based on the edit/update mode */}
      {editMode ? (
        <Form>
          {/* Input fields for updating the farm stand/food image, location, and address */}
          {/* Enter the image url address */}
          <Form.Group controlId="formFood">
            <Form.Label style={{ fontSize: "12px" }}>
              Enter Image URL:
            </Form.Label>
            <Form.Control
              type="text"
              style={{ fontSize: "14px", maxWidth: "268px" }}
              value={updatedFood}
              onChange={(e) => setUpdatedFood(e.target.value)}
            />
          </Form.Group>

          {/* Enter a city or landmark*/}
          <Form.Group controlId="formLocation">
            <Form.Label style={{ fontSize: "12px" }}>
              Enter City or Landmark:
            </Form.Label>
            <Form.Control
              type="text"
              style={{ fontSize: "14px", maxWidth: "268px" }}
              value={updatedLocation}
              onChange={(e) => setUpdatedLocation(e.target.value)}
            />
          </Form.Group>

          {/* Enter street address of farm stand */}
          <Form.Group controlId="formAddress">
            <Form.Label style={{ fontSize: "12px" }}>
              Enter Street Address:
            </Form.Label>
            <Form.Control
              type="text"
              style={{ fontSize: "14px", maxWidth: "260px" }}
              value={updatedAddress}
              onChange={(e) => setUpdatedAddress(e.target.value)}
            />
          </Form.Group>

          {/* Update button */}
          <Button
            style={{ marginTop: "10px", backgroundColor: "#006e5e" }}
            onClick={handleUpdate}
          >
            Update
          </Button>

          {/* Cancel button */}
          <Button
            style={{
              marginTop: "10px",
              marginLeft: "10px",
              backgroundColor: "#006e5e",
            }}
            onClick={() => setEditMode(false)}
          >
            Cancel
          </Button>
        </Form>
      ) : (
        <>
          {/* Edit button*/}
          <Button
            style={{ marginTop: "24px", backgroundColor: "#006e5e" }}
            onClick={() => setEditMode(true)}
          >
            Edit
          </Button>
          {/* Delete button */}
          <Button
            style={{
              marginTop: "24px",
              marginLeft: "10px",
              backgroundColor: "#006e5e",
            }}
            onClick={handleDelete}
          >
            Delete
          </Button>
        </>
      )}
    </div>
  );
}
