import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileUpload from './Components/FileUpload';
import FormPage from './Components/FormPage';
import Navbar from './Partials/Navbar';

const App = () => {
  return (
    <Router>
      <div className="container-fluid d-flex flex-column h-100" align="left">
        <Navbar />
        <Routes>
          <Route path="/" element={<FileUpload />} />
          <Route path="/form" element={<FormPage />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};


export default App;
