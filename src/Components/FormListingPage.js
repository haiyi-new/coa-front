import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FormListingPage.css';

const FormListingPage = () => {
  const [formList, setFormList] = useState([]);

  useEffect(() => {
    // Fetch the form data from the API endpoint
    fetch('http://192.168.0.196:8080')
      .then((response) => response.json())
      .then((data) => setFormList(data))
      .catch((error) => console.error('Error fetching form data:', error));
  }, []);

  if (formList.length === 0) {
    return <div>No forms available.</div>;
  }

  return (
    <div className="form-listing-page">
      <h1>Document Submission Request</h1>
      <div className="form-list">
        {formList.map((form) => (
          <div key={form.idt} className="form-item">
            <Link to={`/form/${form.id}`} className="form-link">
              <div>id: {form.id}</div>
              <div>hscode: {form.hsCode}</div>
              <div>type: {form.type}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormListingPage;
