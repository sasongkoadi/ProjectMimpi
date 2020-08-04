const fs = require("fs");
//This for read JSON
const dataBuffer = fs.readFileSync("2-json.json");
//This for change JSON to string
const dataJSON = dataBuffer.toString();
//This for change string to Object
const myData = JSON.parse(dataJSON);
//This for add or change property name and age in Object that parse from JSON
myData.name = "Sasongko";
myData.age = 28;
//This for change object to JSON
const myDataJSON = JSON.stringify(myData);
//This for write to file
fs.writeFileSync("2-json.json", myDataJSON);

/* const book = {
  title: "Ego is the enemy",
  author: "Ryan Holiday",
};

const bookJSON = JSON.stringify(book); //Change book to JSON type
/* const parseBook = JSON.parse(bookJSON); //this code for convert JSON to object 
fs.writeFileSync('1-json.json', bookJSON) //this code for write data bookJSON to file named 1-json.json 
 
const dataBuffer = fs.readFileSync("1-json.json"); //this function to read file, in this condition it read JSON
const dataJSON = dataBuffer.toString(); //this function to change JSON to object
const data = JSON.parse(dataJSON); // this code for convert JSON to object
 */
