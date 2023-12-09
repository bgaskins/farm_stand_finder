import React from "react";
import LoginForm from "../Auth/LoginForm";

export default function Login() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        alignItems: "center",
        top: "50px",
        height: "100vh",
      }}
    >
      {/* Header */}
      <h2
        style={{
          color: "#4CAF50",
        }}
      >
        Login
      </h2>

      {/* Login form component */}
      <LoginForm />
    </div>
  );
}
