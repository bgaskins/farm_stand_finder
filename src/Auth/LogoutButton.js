// LogoutButton.js
import React from "react";
import { useAuth } from "../Auth/AuthContext";

export default function LogoutButton() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const buttonStyle = {
    color: "#dc5a23",
    fontWeight: "700",
  };

  return (
    // When clicked, user will be logged out and back in login state
    <button
      className="btn"
      style={buttonStyle}
      type="button"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}
