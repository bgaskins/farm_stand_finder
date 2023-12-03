import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FarmStandList from "./Components/FarmStandList";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Help from "./Pages/Help";
import Footer from "./Components/Footer";

/* 

- Use React Router and have at least 3 pages using React Bootstrap or an \alternative styling library
- Contain at least 10 components
- Allow for all CRUD operations

Components: 
1. Navbar 
2. FarmStandList
3. FarmStandCard 
4. Search Bar 
5. Map 
6. Footer 
7. LoadingSpinner 
8. Help
9. FarmStandDetails 
10. FarmStand

Pages:
1. Home
2. FarmStandDetails
3. About

Services:
1. FarmStandService

*/

export default function App() {
  return (
    // Use the Router component for client-side routing
    <Router>
      {/* Main container div for the entire application */}
      <div className="app">
        {/* Navbar component for navigation */}
        <Navbar />
        {/* Switch component to render only the first matching Route */}
        <Switch>
          {/* Route for the main page, rendering the Home component */}
          <Route path="/" exact component={Home} />
          {/* Route for displaying detailed farm stand information, using FarmStandDetails component */}
          <Route path="/farm-stands" exact component={FarmStandList} />
          {/* Route for the help page, rendering the Help component */}
          <Route path="/help" exact component={Help} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
