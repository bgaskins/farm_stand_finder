import React from "react";

export default function CloudHeader() {
  return (
    <>
      <div
        className="cloud-circle"
        style={{
          display: "flex",
          position: "relative",
          width: "110px",
          height: "80px",
          margin: "20px",
          backgroundColor: "#FAFAFA",
          borderRadius: "100% 50% 50% 50%",
        }}
      >
        <div
          className="cloud-circle-second-left"
          style={{
            display: "flex",
            position: "relative",
            width: "100px",
            height: "60px",
            backgroundColor: "#ffffff",
            bottom: "10px",
            left: "40px",
            borderRadius: "50% 50% 50% 50%",
            zIndex: "",
          }}
        ></div>
        <div
          className="cloud-circle-second-left"
          style={{
            display: "flex",
            position: "absolute",
            width: "100px",
            height: "60px",
            backgroundColor: "#ffffff",
            bottom: "20px",
            left: "60px",
            borderRadius: "50% 50% 50% 50%",
            zIndex: "",
          }}
        ></div>
        <div
          className="cloud-circle-little"
          style={{
            display: "flex",
            position: "relative",
            width: "60px",
            height: "20px",
            backgroundColor: "#ffffff",
            bottom: "24px",
            top: "60px",
            borderRadius: "50% 50% 50% 50%",
            zIndex: "2",
          }}
        ></div>

        <div
          className="cloud-circle-sun"
          style={{
            position: "absolute",
            backgroundColor: "#FFDF33",
            borderRadius: "50%",
            width: "80px",
            height: "80px",
            left: "60px",
            zIndex: "1",
          }}
        ></div>
        <div
          className="cloud-circle-right"
          style={{
            position: "absolute",
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            width: "50x",
            height: "40px",
            bottom: "1px",
            left: "120px",
            zIndex: "2",
          }}
        ></div>
        <div
          className="cloud-circle-second-right"
          style={{
            position: "absolute",
            backgroundColor: "#F7F7F7",
            borderRadius: "50%",
            width: "80px",
            height: "60px",
            top: "10px",
            left: "100px",
            zIndex: "1",
          }}
        ></div>
      </div>
      <div
        className="farm-stand-logo"
        style={{
          display: "flex",
          position: "relative",
          fontSize: "45px",
          top: "10px",
          zIndex: "3",
        }}
      >
        <h2
          style={{
            margin: "20px",
            fontSize: "45px",
            fontFamily: "'Cabin Sketch', sans-serif",
            color: "#A58767",
          }}
        >
          {" "}
          Farm Stand Finder{" "}
        </h2>
      </div>
    </>
  );
}
