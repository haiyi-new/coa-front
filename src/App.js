import React from 'react';
import FileUpload from './FileUpload';
import Navbar from './Partials/Navbar';

const App = () => {
  return (
    <div className="container mt-4">
      <Navbar />
      <FileUpload />
    </div>
  );
};

export default App;
