import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TransakcePage from './pages/TransakcePage';
import React from "react";
import DashboardLayout from "./components/DashboardLayout";

function App() {
  return (
    
    <Router>
      <DashboardLayout />
      <Routes>
        <Route path="/" element={<TransakcePage />} />
      </Routes>
    </Router>
  );
}

  


export default App;





