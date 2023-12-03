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

  // Table of farm stand information
  return (
    <div>
      <h1>Farm Stand List</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Stand Name</th>
            <th>Location</th>
            <th>Address</th>
            <th>Food</th>
          </tr>
        </thead>
        <tbody>
          {farmStands.map((farmStand) => (
            <tr key={farmStand.id}>
              <td>{farmStand.standName}</td> {/* Farm Stand Name */}
              <td>{farmStand.location}</td> {/* Location Name */}
              <td>{farmStand.address}</td> {/* Address Name */}
              <td>
                {" "}
                {/* Farm Stand image */}
                <img
                  src={farmStand.food}
                  alt="Food"
                  style={{ width: "100px", height: "auto" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
