import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FarmStandService from "../Services/FarmStandService";
import FarmStandCard from "../Components/FarmStandCard";
import CreateCard from "../Components/CreateCard";
import CloudHeader from "../Components/CloudHeader";

/* 
  Renders the list of farm stands on home page and handles user interactions like 
  Create, Update, Delete

  Uses FarmStandService to perform API requests
*/

export default function Home() {
  const [farmStands, setFarmStands] = useState([]);

  // useEffect hook is used to fetch farm stand data when the component mounts
  useEffect(() => {
    // Call the getAllFarmStands method from FarmStandService to fetch data
    FarmStandService()
      .getAllFarmStands()
      .then((data) => {
        // Set the fetched farm stand data to the component state
        setFarmStands(data);
      })
      .catch((error) => console.error("Error fetching data:", error)); // Handle errors during the fetch process
  }, []);

  //========= UPDATE ===========
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
      console.error("Error updating farm stand:", error);
    }
  };

  //========= DELETE ===========
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
      console.error("Error deleting farm stand:", error);
    }
  };

  // Render the Home component with a list of farm stands and a button to create a new farm stand
  return (
    <Container style={{ marginTop: "20px", marginBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CloudHeader />
      </div>
      <Row style={{ justifyContent: "center", margin: "5px" }}>
        {farmStands.map((farmStand) => (
          <Col
            style={{ margin: "10px" }}
            key={farmStand.id}
            xs={12}
            md={6}
            lg={4}
          >
            <FarmStandCard
              data={farmStand}
              updateFarmStand={updateFarmStand}
              deleteFarmStand={deleteFarmStand}
            />
          </Col>
        ))}
      </Row>
      <div className="text-center">
        <CreateCard updateFarmStand={updateFarmStand} />
      </div>
    </Container>
  );
}
