const fs = require("fs");
const chalk = require("chalk").default;
const getNote = function () {};

//This function for add note
//Before adding note, it will load note from file and check duplicate note
const addNote = function (title, body) {
  const notes = loadNote();
  const duplicateNote = notes.filter(function (note) {
    return note.title === title;
  });
  if (duplicateNote.length === 0) {
    notes.push({
      title: title.toUpperCase(),
      body: body,
    });
    saveNote(notes);
    console.log(chalk.blue.bold.inverse("New Note Added"));
  } else {
    console.log(chalk.inverse.bold.red("Note Title Taken!"));
  }
};

//this function for change object to json and save to notes.json file
const saveNote = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//This function for load data from notes.json and change to object
const loadNote = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
    //when there isn't no notes.json file it will create notes.json file
  }
};

//This function for delete note
const deleteNote = function (title) {
  console.log(chalk.red.bold.inverse("You had delete", title, "Note"));
};

module.exports = {
  getNote: getNote,
  addNote: addNote,
  loadNote: loadNote,
  deleteNote: deleteNote,
};
