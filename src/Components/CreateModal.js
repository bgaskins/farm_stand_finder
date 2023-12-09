import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function CreateModal({
  showModal,
  handleClose,
  createFarmStand,
}) {
  const history = useHistory();

  const [newFarmStand, setNewFarmStand] = useState({
    food: "",
    location: "",
    address: "",
    standName: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFarmStand((prevFarmStand) => ({ ...prevFarmStand, [name]: value }));
  };

  const handleCreateFarmStand = () => {
    createFarmStand(newFarmStand);
    handleClose();
    history.push("/"); // Redirects to home
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Farm Stand</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formFood">
            <Form.Label>Farm Stand Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter image url"
              name="food"
              value={newFarmStand.food}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter location"
              name="location"
              value={newFarmStand.location}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              name="address"
              value={newFarmStand.address}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formStandName">
            <Form.Label>Stand Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter stand name"
              name="standName"
              value={newFarmStand.standName}
              onChange={handleInputChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCreateFarmStand}>
          Create
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
