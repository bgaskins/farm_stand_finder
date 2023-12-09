import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useAuth } from "../Auth/AuthContext";
import { useHistory } from "react-router-dom";
import LogoutButton from "./LogoutButton";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, isAuthenticated, logout } = useAuth();
  const history = useHistory();

  const handleLogin = () => {
    // Hardcoded login username and password
    const hardcodedUsername = "user";
    const hardcodedPassword = "password";
    // User login input for authentication
    const enteredUsername = "user";
    const enteredPassword = "password";

    // Check if the entered credentials match the hardcoded ones
    if (
      enteredUsername === hardcodedUsername &&
      enteredPassword === hardcodedPassword
    ) {
      login();
      console.log("Logged in");
      history.push("/"); // Redirect to the home screen upon successful login
    } else {
      console.error("Login failed: Incorrect username or password");
    }
  };

  const handleLogout = () => {
    logout();
    console.log("Logged out");
    history.push("/"); // Redirect to the home screen upon logout
  };

  // Username and password is hardcoded. Username = user / Password = password
  return (
    <div>
      <div>
        <Form style={{ marginTop: "50px", width: "100%" }}>
          <Form.Group controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            style={{ marginTop: "25px" }}
            variant="success"
            type="button"
            onClick={handleLogin}
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}
