import React from 'react';
import FarmStandCard from './FarmStandCard';
import FarmStandDetails from './FarmStandDetails';


export default function FarmStand({ data, updateFarmStand, deleteFarmStand }) {
  return (
    <div className="farm-stand">
      {/* Render the FarmStandCard component to display image and name */}
      <FarmStandCard data={data} />
      {/* Render the FarmStandDetails component to display detailed farm stand info,
      passing data, updateFarmStand, and deleteFarmStand as props */}
      <FarmStandDetails data={data} updateFarmStand={updateFarmStand} deleteFarmStand={deleteFarmStand} />
    </div>
  );
}


