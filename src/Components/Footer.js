import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        background:
          "linear-gradient(to top, #4CAF50, #4CAF50 50%, #8BC34A 50%, #8BC34A)",
        minHeight: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        position: "relative", // Make the footer position relative
      }}
    >
      {/* Hay Bale 1 */}
      <div
        className="hay-bale"
        style={{
          position: "absolute",
          width: "100px",
          height: "50px",
          backgroundColor: "gold",
          borderRadius: "10px 10px 10px 10px",
          left: "20px",
          top: "10px",
        }}
      ></div>

      {/* Hay Bale 2 */}
      <div
        className="hay-bale"
        style={{
          position: "absolute",
          width: "100px",
          height: "50px",
          backgroundColor: "gold",
          borderRadius: "10px 10px 10px 10px",
          left: "150px",
          bottom: "20px",
        }}
      ></div>

      {/* Copyright and developer info */}
      <p>Farm Stand Finder | Copyright | Built by: Bryan Gaskins</p>

      {/* Hay Bale 3 */}
      <div
        className="hay-bale"
        style={{
          position: "absolute",
          width: "100px",
          height: "50px",
          backgroundColor: "gold",
          borderRadius: "10px 10px 10px 10px",
          right: "20px",
        }}
      ></div>
    </footer>
  );
}
