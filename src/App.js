import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./Auth/AuthContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Help from "./Pages/Help";
import Footer from "./Components/Footer";
import FarmStandDirectory from "./Pages/FarmStandDirectory";
import Login from "./Pages/Login";

/* 

- Use React Router and have at least 3 pages using React Bootstrap or an \alternative styling library
- Contain at least 10 components
- Allow for all CRUD operations

*/

export default function App() {
  library.add(faCircle);

  return (
    <div className="app">
      {/* Navbar component for navigation with React Router */}
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/farm-stands" exact component={FarmStandDirectory} />
            <Route path="/help" exact component={Help} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </Router>
      </AuthProvider>
      <Footer />
    </div>
  );
}
