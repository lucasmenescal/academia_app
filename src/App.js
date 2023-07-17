import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import TreinoDia from './components/weekdays/TreinoDia';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/treino/:dia" element={<TreinoDia />} />
      </Routes>
    </Router>
  );
}

export default App;
