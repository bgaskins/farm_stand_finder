import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import FarmStandDetailsPage from './Pages/FarmStandDetailsPage'
import Home from './Pages/Home';
import Help from './Pages/Help';
import './App.css';

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
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} key="home" />
          <Route path="/farm-stand/:id" exact component={FarmStandDetailsPage} key="farm-stand-details" />
          <Route path="/help" exact component={Help} key="help" />
        </Switch>
      </div>
    </Router>
  );
}
