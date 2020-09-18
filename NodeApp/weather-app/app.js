const geocode = require("./utils/geocode");
const forecast = require("./utils/weather");

geocode("Newcastle", (error, data) => {
  if (error) {
    return console.log(error);
  }
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log(data.place_name);
    console.log(forecastData);
  });
});
