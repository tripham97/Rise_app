import React, { useState } from 'react';
import Nav from './components/Nav';
import AboutScreen from './screens/AboutScreen';
import HomeScreen from './screens/HomeScreen';
import TeamScreen from './screens/TeamScreen';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/team" element={<TeamScreen />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
