import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileUpload from './Components/FileUpload';
import FormPage from './Components/FormPage';
import Navbar from './Partials/Navbar';
//import FormListingPage from './Components/FormListingPage'; // Add this import statement
import Dashboard from './Components/Dashboard';

const App = () => {
  return (
    <Router>
      <div className="container-fluid d-flex flex-column h-100" align="left">
        <Navbar />
        <Routes>
          <Route path="/" element={<FileUpload />} />
          <Route path="/form" element={<Dashboard />} /> {/* Add this route */}
          <Route path="/form/:id" element={<FormPage />} /> {/* Assuming you also have a FormPage for a specific form entry */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
