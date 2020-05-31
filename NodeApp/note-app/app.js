const { personData, showPersonData } = require("./utilities");
const { getNote, createFile } = require("./note");

const person = showPersonData(personData.fauzi.name, personData.fauzi.Age);
var file = createFile(personData.fauzi.name);
getNote(file, person);

/* if (process.argv[2] === "add") return console.log("add notes"); */
/* if (process.argv[2] === "remove") return console.log("delete notes"); */
