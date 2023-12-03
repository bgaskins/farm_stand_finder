import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FarmStandService from "../Services/FarmStandService";
import FarmStand from "../Components/FarmStand";

/*

Fetches farm stand data based off of the farm stand ID parameter from the URL and
renders the data

*/

export default function FarmStandDetails() {
  // Extract 'id' parameter from the URL using the useParams hook
  const { id } = useParams();
  // State variable to hold farm stand data
  const [farmStand, setFarmStand] = useState(null);

  // Fetch farm stand data with useEffect based on the 'id' parameter from the URL
  useEffect(() => {
    FarmStandService.getFarmStandById(id)
      .then((data) => {
        setFarmStand(data);
      })
      .catch((error) => console.error("Error fetching data:", error)); // Fetch process errors
  }, [id]); // ID array in brackets

  // If farmStand data is not available yet, display a loading message/spinner
  if (!farmStand) {
    return <div>One moment...</div>;
  }

  return (
    // Display farm stand details using the FarmStand component
    <div className="farm-stand-details">
      {/* Render the FarmStand component with the farm stand details */}
      <FarmStand
        key={farmStand.id}
        data={farmStand}
        updateFarmStand={updateFarmStand}
        deleteFarmStand={deleteFarmStand}
      />
    </div>
  );
}
