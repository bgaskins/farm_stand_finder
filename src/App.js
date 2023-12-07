import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FarmStandList from "./Components/FarmStandList";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Help from "./Pages/Help";
import Footer from "./Components/Footer";
import FarmStandDirectory from "./Pages/FarmStandDirectory";

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
    <Router>
      <div className="app">
        {/* Navbar component for navigation */}
        <Navbar />
        {/* Switch component to render the first matching Route */}
        <Switch>
          {/* Home page component */}
          <Route path="/" exact component={Home} />
          {/* Farm Stand Directory component */}
          <Route path="/farm-stands" exact component={FarmStandDirectory} />
          {/* Help page component */}
          <Route path="/help" exact component={Help} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
