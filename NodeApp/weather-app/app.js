const geocode = require("./utils/geocode");
const forecast = require("./utils/weather");
const address = process.argv[2];

if (!address) {
  return console.log("Please input a location");
} else {
  geocode(process.argv[2], (error, { place_name, latitude, longitude }) => {
    if (error) {
      return console.log(error);
    }
    forecast(
      latitude,
      longitude,
      (error, { temp, feelslike, weatherDescription }) => {
        if (error) {
          return console.log(error);
        }
        console.log(place_name);
        console.log("Temperature is", temp, "Degree");
        console.log("It feel like", feelslike, "Degree");
        console.log("And it will", weatherDescription, "All Day");
      }
    );
  });
}
