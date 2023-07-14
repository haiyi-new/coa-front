import React, { useEffect, useState } from 'react';

const FormPage = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Fetch the form data from the API endpoint
    fetch('your_api_endpoint')
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error('Error fetching form data:', error));
  }, []);

  if (!formData) {
    return <div>Loading form data...</div>;
  }

  return (
    <div>
      <h1>Form Page</h1>
      <form>
        <label htmlFor="nameInput">Name:</label>
        <input type="text" id="nameInput" name="name" value={formData.name} />

        <label htmlFor="emailInput">Email:</label>
        <input type="email" id="emailInput" name="email" value={formData.email} />

        <label htmlFor="addressInput">Address:</label>
        <input type="text" id="addressInput" name="address" value={formData.address} />

        {/* Add more form fields as needed */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
