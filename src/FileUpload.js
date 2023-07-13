import React, { useState } from 'react';
import $ from 'jquery';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    $.ajax({
      url: 'YOUR_API_ENDPOINT', // Replace with your API endpoint
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: () => {
        console.log('File uploaded successfully!');
        // Handle success behavior here
      },
      error: (error) => {
        console.error('Error uploading file:', error);
        // Handle error behavior here
      },
    });
  };

  return (
    <div>
      <h2>File Upload</h2>
      <div className="mb-3">
        <label htmlFor="fileInput" className="form-label">
          Select File:
        </label>
        <input
          type="file"
          className="form-control"
          id="fileInput"
          onChange={handleFileChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
};

export default FileUpload;
