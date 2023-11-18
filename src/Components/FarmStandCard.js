import React from 'react';

export default function FarmStandCard({ data }) {
  return (
    <div className="farm-stand-card">
      {/* Farm stand image */}
      <img src={data.food} alt="Food" />
      {/* Farm stand name */}
      <h3>{data.standName} Farm Stand</h3>
    </div>
  );
}
