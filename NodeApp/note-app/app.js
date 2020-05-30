const { personData, showPersonData } = require("./utilities");
const { getNote, createFile } = require("./note");

const person = showPersonData(personData.fauzi.name, personData.fauzi.Age);
var file = createFile(personData.fauzi.name);
getNote(file, person);
