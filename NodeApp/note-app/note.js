const fs = require("fs");
const chalk = require("chalk").default;

const getNote = function () {};

//This function for add note
//Before adding note, it will load note from file and check duplicate note
const addNote = function (title, body) {
  const notes = loadNote();
  const duplicateNote = notes.filter(function (note) {
    return note.title === title.toUpperCase();
  });
  if (duplicateNote.length === 0) {
    notes.push({
      title: title.toUpperCase(),
      body: body,
    });
    saveNote(notes);
    console.log(
      chalk.blue.bold.inverse("New Note With", title.toUpperCase(), "Added")
    );
  } else {
    console.log(
      chalk.inverse.bold.red(
        "Note With Title",
        title.toUpperCase(),
        "Was Taken!"
      )
    );
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
    //DataBuffer load data from notes.json
    const dataBuffer = fs.readFileSync("notes.json");
    //dataJSON change dataBuffer to string
    const dataJSON = dataBuffer.toString();
    //dataJSON change to object
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
    //when there isn't no notes.json file it will create notes.json file
  }
};

//This function for delete note
const deleteNote = function (title) {
  const notes = loadNote();
  //This for make new array with filter
  const newNotes = notes.filter(function (note) {
    return note.title !== title.toUpperCase();
  });
  //Check notes title
  if (notes.length > newNotes.length) {
    saveNote(newNotes);
    console.log(
      chalk.green.bold(
        "Deleting Note With Title",
        title.toUpperCase(),
        "Was Successful"
      )
    );
  } else {
    console.log(
      chalk.red.bold("This note with Title", title.toUpperCase(), "not found")
    );
  }
};

module.exports = {
  getNote: getNote,
  addNote: addNote,
  loadNote: loadNote,
  deleteNote: deleteNote,
};
