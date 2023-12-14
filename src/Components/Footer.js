import React from "react";

export default function Footer() {
  const windowWidth = window.innerWidth;

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
        position: "relative",
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
          display: windowWidth <= 768 ? "none" : "block",
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
          display: windowWidth <= 768 ? "none" : "block",
        }}
      ></div>

      {/* Copyright and developer info */}
      <p
        style={{
          fontSize: windowWidth <= 768 ? "14px" : "16px",
        }}
      >
        Farm Stand Finder | © 2023-2024 | Built by: Bryan Gaskins
      </p>

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
          display: windowWidth <= 768 ? "none" : "block",
        }}
      ></div>
    </footer>
  );
}
