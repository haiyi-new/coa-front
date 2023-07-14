import React from 'react';
import FileUpload from './Components/FileUpload';
import Navbar from './Partials/Navbar';

const App = () => {
  return (
    <div class="container-fluid d-flex flex-column h-100" align="left">
      <Navbar />
      <FileUpload />
    </div>
  );
};

export default App;
