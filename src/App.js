import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Goals from "./components/Goals";
import Ticklist from "./components/Ticklist";
import Login from "./components/Login";
import Register from "./components/Register";
// import PrivateRoute from "./PrivateRoute"; - removed as now allowing render of the components but redirected to login when new climb or goal is added


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
          <Route path="/goals" element={<Goals />} />
        
        <Route path="/ticklist" element={<Ticklist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Redirect all unknown routes to Home */}
      </Routes>
    </div>
  );
}

export default App;
