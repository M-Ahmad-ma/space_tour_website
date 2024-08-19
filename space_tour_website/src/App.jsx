import React from 'react';
import Home from './components/Home';
import Destination from './components/Destination'; 
import Crew from './components/Crew';
import Technology from './components/Technology'; 


import {
  BrowserRouter as Router,
  Routes,   // Import Routes
  Route
} from "react-router-dom";
 
function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/Home" element={<Home />} /> 
        <Route path="/Destination" element={<Destination />} />
        <Route path="/" element={<Home />} />
        <Route path="/Crew" element={<Crew/>} /> 
        <Route path="/Technology" element={<Technology/>} />  
      </Routes>
    </Router>
  );
}

export default App;
