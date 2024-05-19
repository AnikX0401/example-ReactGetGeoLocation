import { useState } from "react";
import Location from "./GetGeolocation";

const NewForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    country: "",
    postcode: "",
    state: "",
    address: "",
  });

  const handleLocationRetrieved = (locationDetails) => {
    setFormData({
      ...formData,
      ...locationDetails,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Submit form data
  };

  return (
    <form onSubmit={handleSubmit}>
      <div></div>
      <Location onLocationRetrieved={handleLocationRetrieved} />
      {/* <Location onLocationRetrieved={handleLocationRetrieved} /> */}
      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Country:</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Postcode:</label>
        <input
          type="text"
          name="postcode"
          value={formData.postcode}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>State:</label>
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewForm;
