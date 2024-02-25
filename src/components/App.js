// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Bio from './Bio';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
