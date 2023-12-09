import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import FarmStandService from "../Services/FarmStandService";

export default function FarmStandList() {
  const farmStandService = FarmStandService();
  const [farmStands, setFarmStands] = useState([]);

  useEffect(() => {
    farmStandService
      .getAllFarmStands()
      .then((data) => {
        console.log("Farm Stands Data:", data);
        setFarmStands(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [farmStandService]);

  const headStyle = {
    backgroundColor: "#A58767",
    color: "#ffffff",
    border: "none",
  };

  const tdStyle = {
    backgroundColor: "#e9f4f9",
    color: "#000000",
    border: "none",
    padding: "8px",
    textAlign: "left",
  };

  // Table of farm stand information
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th style={headStyle}>Stand Name</th>
            <th style={headStyle}>Location</th>
            <th style={headStyle}>Address</th>
            <th style={headStyle}></th>
          </tr>
        </thead>
        <tbody>
          {farmStands.map((farmStand) => (
            <tr key={farmStand.id}>
              <td style={tdStyle}>{farmStand.standName}</td>{" "}
              {/* Farm Stand Name */}
              <td style={tdStyle}>{farmStand.location}</td>{" "}
              {/* Location Name */}
              <td style={tdStyle}>{farmStand.address}</td> {/* Address Name */}
              <td style={tdStyle}>
                {" "}
                {/* Farm Stand image */}
                <img
                  src={farmStand.food}
                  alt="Food"
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
