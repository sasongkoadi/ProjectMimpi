const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const urlForecast =
    "http://api.weatherstack.com/current?access_key=7998b89fa42afe36c1f8daca10443d1e&query=" +
    latitude +
    "," +
    longitude +
    "units=m";
  request({ url: urlForecast, json: true }, (error, response) => {
    if (error) {
      callback("Cannot connect to Weather Services!", error);
    } else if (response.body.success == false) {
      callback("Unable to find a location!", response.body.error);
    } else {
      callback(undefined, {
        temp: response.body.current.temperature,
        feelslike: response.body.current.feelslike,
        weatherDescription: response.body.current.weather_descriptions[0],
        location: response.body.location.name,
      });
    }
  });
};

module.exports = forecast;
