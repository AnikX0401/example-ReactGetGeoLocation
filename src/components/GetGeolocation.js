import { Button } from "@mui/material";
import { useState } from "react";
import { getAddressDetails } from "./services";

const Location = ({ onLocationRetrieved }) => {
  const [addressDetails, setAddressDetails] = useState();
  const [loading, setLoading] = useState(false);

  async function fetchAddressDetails(lat, lng) {
    setLoading(true);
    const result = await getAddressDetails(lat, lng);
    const details = {
      city: result.results[0].components.city,
      country: result.results[0].components.country,
      postcode: result.results[0].components.postcode,
      state: result.results[0].components.state,
      address: result.results[0].formatted,
    };
    setAddressDetails(details);
    onLocationRetrieved(details);
    setLoading(false);
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        console.log("position::", position);
        await fetchAddressDetails(
          position.coords.latitude,
          position.coords.longitude
        );
      });
    }
  }

  const renderAddress = () => {
    if (addressDetails) {
      return (
        <div>
          <div>City: {addressDetails.city}</div>
          <div>Country: {addressDetails.country}</div>
          <div>Postcode: {addressDetails.postcode}</div>
          <div>State: {addressDetails.state}</div>
          <div>Address: {addressDetails.address}</div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <Button onClick={getLocation}>Show My Current Location</Button>
      {loading && <div>Loading address details..</div>}
      {renderAddress()}
    </div>
  );
};

export default Location;
