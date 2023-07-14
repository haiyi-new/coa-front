import React, { useState } from 'react';
import $ from 'jquery';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formData, setFormData] = useState({
    hsCode: '',
    typeOfApplication: '',
  });

  const handleFileChange = (acceptedFiles) => {
    setSelectedFiles(acceptedFiles);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleCancel = (fileName) => {
    const updatedFiles = selectedFiles.filter((file) => file.name !== fileName);
    setSelectedFiles(updatedFiles);
  };

  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      console.log('No files selected.');
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('file', file);
    });

    $.ajax({
      url: 'http://192.168.0.196:8080', // Replace with your API endpoint
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: () => {
        console.log('Files uploaded successfully!');
        // Handle success behavior here
      },
      error: (error) => {
        console.error('Error uploading files:', error);
        // Handle error behavior here
      },
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleFileChange,
    accept: 'image/*, application/pdf', // Accept image and PDF files
    multiple: true, // Allow multiple files to be selected
  });

  return (
    <div>
      <table width="100%">
        <tbody>
          <tr>
            <td
              align="center"
              valign="middle"
              colSpan="4"
              style={{ backgroundColor: '#224099', height: '30px' }}
            >
              <span
                className="font_titlewhite"
                style={{ color: 'White', fontWeight: 'bold', fontSize: '20px' }}
              >
                Document Submission
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <div className="d-flex mb-3 mt-3">
            <label htmlFor="hsCodeInput" className="form-label" style={{ width: '200px' }}>
              HS Code:
            </label>
            <input
              type="text"
              className="form-control ms-2"
              id="hsCodeInput"
              name="hsCode"
              value={formData.hsCode}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-flex mb-3">
            <label htmlFor="typeOfApplicationInput" className="form-label" style={{ width: '200px' }}>
              Type of Application:
            </label>
            <input
              type="text"
              className="form-control ms-2"
              id="typeOfApplicationInput"
              name="typeOfApplication"
              value={formData.typeOfApplication}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-flex mb-3">
            <label className="form-label" style={{ width: '200px' }}>
              Upload Document:
            </label>
            <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here...</p>
              ) : (
                <p>Drag and drop files here or click to select files</p>
              )}
              {selectedFiles.length > 0 && (
                <div>
                  <strong>Attached Files:</strong>
                  <ul>
                    {selectedFiles.map((file, index) => (
                      <li key={index}>
                        {file.name}{' '}
                        <button className="btn btn-danger btn-sm" onClick={() => handleCancel(file.name)}>
                          Cancel
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button style={{ backgroundColor: '#224099' }} className="btn btn-primary" onClick={handleUpload}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .dropzone {
          border: 2px dashed #ccc;
          padding: 20px;
          text-align: center;
          cursor: pointer;
          width: 100%;
        }
        .dropzone.active {
          border-color: #224099;
        }
      `}</style>
    </div>
  );
};

export default FileUpload;
