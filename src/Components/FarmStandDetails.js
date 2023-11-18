import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

export default function FarmStandDetails({ data, updateFarmStand, deleteFarmStand }) {
  
  // State variables for managing edit mode and updated input values
  const [editMode, setEditMode] = useState(false);
  const [updatedFood, setUpdatedFood] = useState(data?.food ?? '');
  const [updatedLocation, setUpdatedLocation] = useState(data.location);
  const [updatedAddress, setUpdatedAddress] = useState(data.address);

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
      // Exit (cancel) edit mode after successful update
      setEditMode(false);
    } catch (error) { // If Promise is rejected 
      console.error('Error updating farm stand:', error);
    }
  };

  // Function to handle deleting a specific farm stand and its info
  const handleDelete = async () => {
    try {
      // Call the deleteFarmStand function with the farm stand ID
      await deleteFarmStand(data.id);
    } catch (error) {  // If Promise is rejected 
      console.error('Error deleting farm stand:', error);
    }
  };

  return (
    <div className="farm-stand-details">
      <h3>Farm Stand Details</h3>

      {/* Conditional rendering based on the edit/update mode */}
      {editMode ? (
        <>
          {/* Input fields for updating the farm stand/food image, location, and address */}
          <label>
            Food:
            <input
              type="text"
              value={updatedFood}
              onChange={(e) => setUpdatedFood(e.target.value)}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              value={updatedLocation}
              onChange={(e) => setUpdatedLocation(e.target.value)}
            />
          </label>
          <label>
            Address:
            <input
              type="text"
              value={updatedAddress}
              onChange={(e) => setUpdatedAddress(e.target.value)}
            />
          </label>

          {/* Buttons for updating and canceling the edit mode */}
          <Button variant="dark" onClick={handleUpdate}>Update</Button>
          <Button variant="dark" onClick={() => setEditMode(false)}>Cancel</Button>
        </>
      ) : (
        <>
          {/* Display location and address */}
          <p>
            <strong>Location:</strong> {data.location}
          </p>
          <p>
            <strong>Address:</strong> {data.address}
          </p>

          {/* Buttons for entering edit mode, updating, and deleting */}
          <Button variant="dark" onClick={() => setEditMode(true)}>Edit</Button>
          <Button variant="dark" onClick={handleDelete}>Delete</Button>
        </>
      )}
    </div>
  );
}
