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
    HsCode: '',
    Type: '',
    SenderCompany: '',
    SenderAddress: '',
    Consignee: '',
    ConsigneeAddress: '',
    Date: '',
    PLNo: '',
    Packages: '',
    DescriptionGood: '',
    Quantity: '',
    NetWeight: '',
    GrossWeight: '',
    TotalQuantity: '',
    TotalNetWeight: '',
    TotalGrossWeight: '',
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
          <input type="text" id="hsCodeInput" name="HsCode" value={mergedData.HsCode} readOnly />
        </div>

        <div className="form-field">
          <label htmlFor="typeInput">Type:</label>
          <input type="text" id="typeInput" name="Type" value={mergedData.Type} readOnly />
        </div>

        <div className="form-field">
          <label htmlFor="senderCompanyInput">Sender Company:</label>
          <input type="text" id="senderCompanyInput" name="SenderCompany" value={mergedData.SenderCompany} readOnly />
        </div>

        <div className="form-field">
          <label htmlFor="senderAddressInput">Sender Address:</label>
          <input type="text" id="senderAddressInput" name="SenderAddress" value={mergedData.SenderAddress} readOnly />
        </div>

        <div className="form-field">
          <label htmlFor="consigneeInput">Consignee:</label>
          <input type="text" id="consigneeInput" name="Consignee" value={mergedData.Consignee} readOnly />
        </div>

        <div className="form-field">
          <label htmlFor="consigneeAddressInput">Consignee Address:</label>
          <input
            type="text"
            id="consigneeAddressInput"
            name="ConsigneeAddress"
            value={mergedData.ConsigneeAddress}
            readOnly
          />
        </div>

        <div className="form-field">
          <label htmlFor="dateInput">Date:</label>
          <input type="text" id="dateInput" name="Date" value={mergedData.Date} readOnly />
        </div>

        <div className="form-field">
          <label htmlFor="plNoInput">PL No:</label>
          <input type="text" id="plNoInput" name="PLNo" value={mergedData.PLNo} readOnly />
        </div>

        <div className="form-field">
          <label htmlFor="packagesInput">Packages:</label>
          <input type="text" id="packagesInput" name="Packages" value={mergedData.Packages} readOnly />
        </div>

        <div className="form-field">
          <label htmlFor="descriptionGoodInput">Description of Goods:</label>
          <input
            type="text"
            id="descriptionGoodInput"
            name="DescriptionGood"
            value={mergedData.DescriptionGood}
            readOnly
          />
        </div>

        <div className="form-field">
          <label htmlFor="quantityInput">Quantity:</label>
          <input type="text" id="quantityInput" name="Quantity" value={mergedData.Quantity} readOnly />
        </div>

        <div className="form-field">
          <label htmlFor="netWeightInput">Net Weight:</label>
          <input type="text" id="netWeightInput" name="NetWeight" value={mergedData.NetWeight} readOnly />
        </div>

        <div className="form-field">
          <label htmlFor="grossWeightInput">Gross Weight:</label>
          <input type="text" id="grossWeightInput" name="GrossWeight" value={mergedData.GrossWeight} readOnly />
        </div>

        <div className="form-field">
          <label htmlFor="totalQuantityInput">Total Quantity:</label>
          <input type="text" id="totalQuantityInput" name="TotalQuantity" value={mergedData.TotalQuantity} readOnly />
        </div>

        <div className="form-field">
          <label htmlFor="totalNetWeightInput">Total Net Weight:</label>
          <input type="text" id="totalNetWeightInput" name="TotalNetWeight" value={mergedData.TotalNetWeight} readOnly />
        </div>

        <div className="form-field">
          <label htmlFor="totalGrossWeightInput">Total Gross Weight:</label>
          <input
            type="text"
            id="totalGrossWeightInput"
            name="TotalGrossWeight"
            value={mergedData.TotalGrossWeight}
            readOnly
          />
        </div>

        <div className="form-field">
          <a href={mergedData.filePath} className="download-link" download>
            Download File
          </a>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;
