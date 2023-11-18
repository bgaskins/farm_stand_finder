import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import FarmStandService from '../Services/FarmStandService';
import FarmStand from '../Components/FarmStand';



export default function Home() {
  // State hook to manage the list of farm stands
  const [farmStands, setFarmStands] = useState([]);

  // useEffect hook to fetch farm stand data when the component mounts
  useEffect(() => {
    // Call the getAllFarmStands method from FarmStandService to fetch data
    FarmStandService().getAllFarmStands()
      .then(data => {
        // Set the fetched farm stand data to the component state
        setFarmStands(data);
      })
      .catch(error => console.error('Error fetching data:', error)); // Handle errors during the fetch process
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  // Function to create a new farm stand
  const createFarmStand = async () => {
    try {
      // Construct a new farm stand object with default values
      const newFarmStand = {
        food: 'New Food',
        location: 'New Location',
        address: 'New Address',
        standName: 'New Stand Name',
      };
  
      // Call the createFarmStand method from FarmStandService to add the new farm stand
      await FarmStandService().createFarmStand(newFarmStand);
  
      // After creating, fetch the updated data
      const updatedData = await FarmStandService().getAllFarmStands();
  
      // Update the state with the modified farm stand data
      setFarmStands(updatedData);
    } catch (error) {
      console.error('Error creating farm stand:', error);
    }
  };

  // Function to update an existing farm stand
  const updateFarmStand = async (updatedFarmStand) => {
    try {
      // Call the updateFarmStand method from FarmStandService to modify an existing farm stand
      await FarmStandService().updateFarmStand(updatedFarmStand);
      
      // After updating, fetch the updated data
      const updatedData = await FarmStandService().getAllFarmStands();
      
      // Update the state with the modified farm stand data
      setFarmStands(updatedData);
    } catch (error) {
      console.error('Error updating farm stand:', error);
    }
  };

  // Function to delete an existing farm stand
  const deleteFarmStand = async (farmStandId) => {
    try {
      // Call the deleteFarmStand method from FarmStandService to remove an existing farm stand
      await FarmStandService().deleteFarmStand(farmStandId);
      
      // After deletion, fetch the updated data
      const updatedData = await FarmStandService().getAllFarmStands();
      
      // Update the state with the modified farm stand data
      setFarmStands(updatedData);
    } catch (error) {
      console.error('Error deleting farm stand:', error);
    }
  };

  // Render the Home component with a list of farm stands and a button to create a new farm stand
  return (
    <div className="home">
      <h2>Home</h2>
      {farmStands.map(farmStand => (
        <FarmStand
          key={farmStand.id}
          data={farmStand}
          updateFarmStand={updateFarmStand}
          deleteFarmStand={deleteFarmStand}
        />
      ))}
      <Button variant="primary" onClick={createFarmStand}>Create New Farm Stand</Button>
    </div>
  );
}
