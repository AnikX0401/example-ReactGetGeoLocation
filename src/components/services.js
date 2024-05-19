async function getAddressDetails(lat, lng) {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const apiKey = "8dffacd21fc3472eb0c0f485cae4d665";

    const response = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`,
      {
        method: "GET",
        headers: myHeaders,
      }
    );

    console.log(response.status);

    const addressdetails = await response.json();
    return addressdetails;
  } catch (error) {
    console.error("Failed to get address details:", error);
    return {
      error: "failed",
    };
  }
}

export { getAddressDetails };
