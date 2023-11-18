import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FarmStandList from './Components/FarmStandList';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Help from './Pages/Help';

/* 

Components: 
1. Navbar 
2. FarmStandGrid 
3. FarmStandCard 
4. Search Bar 
5. Map 
6. Footer 
7. LoadingSpinner 
8. ErrorComponent 
9. FarmStandDetails 
10. ViewMapButton

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
     </div>
   </Router>
  );
}
