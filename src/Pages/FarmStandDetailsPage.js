import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FarmStandService from '../Services/FarmStandService';
import FarmStand from '../Components/FarmStand'; 

export default function FarmStandDetails() {
   // Extract 'id' parameter from the URL using the useParams hook
   const { id } = useParams();
   // State variable to hold farm stand data
   const [farmStand, setFarmStand] = useState(null);
 
   // Use useEffect to fetch farm stand data 
   useEffect(() => {
     // Fetch farm stand data based on the 'id' parameter from the URL
     FarmStandService.getFarmStandById(id)  
       .then(data => {
         // Set the fetched farm stand data to the FarmStand component
         setFarmStand(data);
       })
       .catch(error => console.error('Error fetching data:', error)); // Fetch process errors
   }, [id]); // Effect is reinvoked so it runs again when the 'id' changes in the URL
 
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