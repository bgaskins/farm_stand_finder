import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import LogoutButton from "../Auth/LogoutButton";

export default function CustomNavbar() {
  const { isAuthenticated } = useAuth();

  const navLinkStyle = {
    color: "#875927",
  };

  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="nav-links"
          style={{
            display: "flex",
            marginLeft: "auto",
            marginRight: "40px",
          }}
        >
          <Nav.Item>
            <Nav.Link style={navLinkStyle} as={Link} to="/">
              {" "}
              {/* Home */}
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={navLinkStyle} as={Link} to="/help">
              {" "}
              {/* Help Page */}
              Help
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={navLinkStyle} as={Link} to="/farm-stands">
              {" "}
              {/* Farm Stand Directory */}
              Farm Stands
            </Nav.Link>
          </Nav.Item>

          {isAuthenticated ? (
            <Nav.Item>
              <LogoutButton /> {/* Logout link appears when logged in */}
            </Nav.Item>
          ) : (
            <Nav.Item>
              <Nav.Link as={Link} to="/login">
                {" "}
                {/* Login. This link appears when not logged in */}
                Login
              </Nav.Link>
            </Nav.Item>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
