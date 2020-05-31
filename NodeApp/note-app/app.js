const { personData, showPersonData } = require("./utilities");
const { getNote, createFile, deleteNote, nothingToDo } = require("./note");
var person;
var fileData;
let data;
let file;

process.argv[2] === "sasongko"
  ? ((fileData = process.argv[2]), (person = personData.sasongko))
  : process.argv[2] === "fauzi"
  ? ((fileData = process.argv[2]), (person = personData.fauzi))
  : console.log();

process.argv[3] === "add"
  ? ((data = showPersonData(person)),
    (file = createFile(fileData)),
    getNote(file, data))
  : process.argv[3] === "remove"
  ? ((file = createFile(fileData)), deleteNote(file))
  : nothingToDo();
