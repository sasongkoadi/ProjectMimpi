const request = require("postman-request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/weather");

/* const url =

request({ url: url, json: true }, (error, response) => {
  if (error) {
    console.log("Cannot Connect to Weather App");
  } else if (response.body.success === false) {
    console.log("Unable to find a location");
  } else {
    const current = response.body.current;
    const temp = current.temperature;
    const feelsLike = current.feelslike;
    const weatherDescription = current.weather_descriptions[0];
    console.log(
      weatherDescription,
      "It is current",
      temp,
      "degree out. It feels like",
      feelsLike,
      "degree out"
    );
  }
}); */
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before) -75.7088, 44.1545

forecast(-75.7088851, 44.1544832, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

geocode("117.5,0.13333", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});

geocode("-75.7088,44.1545", (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
