import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./FormPage.css";

const FormPage = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    // Fetch the form data for the specific ID from the API endpoint
    fetch(`http://192.168.0.196:8080/${id}`)
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error("Error fetching form data:", error));
  }, [id]);

  if (!formData) {
    return <div>Loading form data...</div>;
  }

  const handleChange = (e) => {
    const { name, value, dataset } = e.target;
    const index = dataset.index;
    const field = name.replace("[]", "");
  
    setFormData((prevFormData) => {
      const fieldValue = prevFormData[field];
      let updatedFieldValue;
  
      if (Array.isArray(fieldValue)) {
        updatedFieldValue = [...fieldValue];
        updatedFieldValue[index] = value;
      } else {
        updatedFieldValue = value;
      }
  
      return {
        ...prevFormData,
        [field]: updatedFieldValue,
      };
    });
  };
  const handleDownload = () => {
    window.open(`http://192.168.0.196:8080/${id}/file`, "_blank");
  };

  return (
    <div className="form-container">
      <div className="download-link-container">
        <label className="download-link" onClick={handleDownload}>
          Download File
        </label>
      </div>
      <div className="form-content">
        <h1 contentEditable="true">Document Submission: ID {id}</h1>
        <form>
          <div className="form-field">
            <label htmlFor="hsCodeInput">HsCode:</label>
            <input
              type="text"
              id="hsCodeInput"
              name="hsCode"
              value={formData.hsCode}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="typeInput">Type:</label>
            <input
              type="text"
              id="typeInput"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="senderCompanyInput">Sender Company:</label>
            <input
              type="text"
              id="senderCompanyInput"
              name="senderCompany"
              value={formData.senderCompany}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="senderAddressInput">Sender Address:</label>
            <input
              type="text"
              id="senderAddressInput"
              name="senderAddress"
              value={formData.senderAddress}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="consigneeInput">Consignee:</label>
            <input
              type="text"
              id="consigneeInput"
              name="consignee"
              value={formData.consignee}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="consigneeAddressInput">Consignee Address:</label>
            <input
              type="text"
              id="consigneeAddressInput"
              name="consigneeAddress"
              value={formData.consigneeAddress}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="dateInput">Date:</label>
            <input
              type="text"
              id="dateInput"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="pLNoInput">PL No:</label>
            <input
              type="text"
              id="pLNoInput"
              name="pLNo"
              value={formData.pLNo}
              onChange={handleChange}
            />
          </div>

          <div className="form-field">
            <label htmlFor="packagesInput">Packages:</label>
            <input
              type="text"
              id="packagesInput"
              name="packages"
              value={formData.packages}
              onChange={handleChange}
            />
          </div>

          {formData.items && formData.items.length > 0 && (
            <div className="form-field">
              <label htmlFor="packagesInput">Items:</label>
              <table className="tabless">
                <thead>
                  <tr>
                    <th></th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Net Weight</th>
                    <th>Gross Weight</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.items &&
                    formData.items.map((item, index) => (
                      <tr key={index}>
                        <td>Item {index + 1}</td>
                        <td>
                          <input
                            type="text"
                            name="descriptionGood[]"
                            data-index={index}
                            value={item.description}
                            onChange={handleChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="quantity[]"
                            data-index={index}
                            value={item.quantity}
                            onChange={handleChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="netWeight[]"
                            data-index={index}
                            value={item.netWeight}
                            onChange={handleChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="grossWeight[]"
                            data-index={index}
                            value={item.grossWeight}
                            onChange={handleChange}
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="form-field">
            <label htmlFor="totalQuantityInput">Total Quantity:</label>
            <input
              type="text"
              id="totalQuantityInput"
              name="totalQuantity"
              value={formData.totalQuantity}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
