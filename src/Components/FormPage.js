import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './FormPage.css'; // Import the CSS file for styling

const FormPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Fetch the form data for the specific ID from the API endpoint
    fetch(`http://192.168.0.196:8080/${id}`)
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error('Error fetching form data:', error));
  }, [id]);

  if (!formData) {
    return <div>Loading form data...</div>;
  }

  // Define default values for missing or undefined fields
  const defaultValues = {
    hsCode: '',
    type: '',
    senderCompany: '',
    senderAddress: '',
    consignee: '',
    consigneeAddress: '',
    date: '',
    pLNo: '',
    packages: '',
    descriptionGood: '',
    quantity: '',
    netWeight: '',
    grossWeight: '',
    totalQuantity: '',
    totalNetWeight: '',
    totalGrossWeight: '',
    filePath: '', // Provide a default value for filePath
  };

  // Merge default values with the fetched data
  const mergedData = { ...defaultValues, ...formData };

  return (
    <div className="form-container">
      <h1>Form Page</h1>
      <form>
        <div className="form-field">
          <label htmlFor="hsCodeInput">HsCode:</label>
          <input type="text" id="hsCodeInput" name="hsCode" value={mergedData.hsCode} />
        </div>

        {/* Add more form fields as needed */}
        <div className="form-field">
          <label htmlFor="typeInput">Type:</label>
          <input type="text" id="typeInput" name="type" value={mergedData.type} />
        </div>

        <div className="form-field">
          <label htmlFor="senderCompanyInput">Sender Company:</label>
          <input
            type="text"
            id="senderCompanyInput"
            name="senderCompany"
            value={mergedData.senderCompany}
          />
        </div>

        <div className="form-field">
          <label htmlFor="senderAddressInput">Sender Address:</label>
          <input
            type="text"
            id="senderAddressInput"
            name="senderAddress"
            value={mergedData.senderAddress}
          />
        </div>

        <div className="form-field">
          <label htmlFor="consigneeInput">Consignee:</label>
          <input
            type="text"
            id="consigneeInput"
            name="consignee"
            value={mergedData.consignee}
          />
        </div>

        <div className="form-field">
          <label htmlFor="consigneeAddressInput">Consignee Address:</label>
          <input
            type="text"
            id="consigneeAddressInput"
            name="consigneeAddress"
            value={mergedData.consigneeAddress}
          />
        </div>

        <div className="form-field">
          <label htmlFor="dateInput">Date:</label>
          <input type="text" id="dateInput" name="date" value={mergedData.date} />
        </div>

        <div className="form-field">
          <label htmlFor="pLNoInput">PL No:</label>
          <input type="text" id="pLNoInput" name="pLNo" value={mergedData.pLNo} />
        </div>

        <div className="form-field">
          <label htmlFor="packagesInput">Packages:</label>
          <input type="text" id="packagesInput" name="packages" value={mergedData.packages} />
        </div>

        <div className="form-field">
          <label htmlFor="descriptionGoodInput">Description Good:</label>
          <input
            type="text"
            id="descriptionGoodInput"
            name="descriptionGood"
            value={mergedData.descriptionGood}
          />
        </div>

        <div className="form-field">
          <label htmlFor="quantityInput">Quantity:</label>
          <input type="text" id="quantityInput" name="quantity" value={mergedData.quantity} />
        </div>

        <div className="form-field">
          <label htmlFor="netWeightInput">Net Weight:</label>
          <input type="text" id="netWeightInput" name="netWeight" value={mergedData.netWeight} />
        </div>

        <div className="form-field">
          <label htmlFor="grossWeightInput">Gross Weight:</label>
          <input
            type="text"
            id="grossWeightInput"
            name="grossWeight"
            value={mergedData.grossWeight}
          />
        </div>

        <div className="form-field">
          <label htmlFor="totalQuantityInput">Total Quantity:</label>
          <input
            type="text"
            id="totalQuantityInput"
            name="totalQuantity"
            value={mergedData.totalQuantity}
          />
        </div>

        <div className="form-field">
          <label htmlFor="totalNetWeightInput">Total Net Weight:</label>
          <input
            type="text"
            id="totalNetWeightInput"
            name="totalNetWeight"
            value={mergedData.totalNetWeight}
          />
        </div>

        <div className="form-field">
          <label htmlFor="totalGrossWeightInput">Total Gross Weight:</label>
          <input
            type="text"
            id="totalGrossWeightInput"
            name="totalGrossWeight"
            value={mergedData.totalGrossWeight}
          />
        </div>

        <div className="form-field">
          <a href={mergedData.filePath || '#'} className="download-link" download>
            Download File
          </a>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
