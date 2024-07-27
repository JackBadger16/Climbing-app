import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Goals from './components/Goals';
import Ticklist from './components/Ticklist';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private routes */}
        <Route
          path="/goals"
          element={
            <PrivateRoute>
              <Goals />
            </PrivateRoute>
          }
        />
        <Route
          path="/ticklist"
          element={
            <PrivateRoute>
              <Ticklist />
            </PrivateRoute>
          }
        />

        {/* Redirect from any unknown route to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
