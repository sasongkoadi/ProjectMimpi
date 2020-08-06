const fs = require("fs");
const chalk = require("chalk").default;

//This function to read note using title find
const readNote = (title) => {
  debugger;
  const notes = loadNote();
  //This function to get data using find method
  const noteData = notes.find((note) => note.title === title.toUpperCase());
  //This condition to show note data or notification
  if (noteData) {
    console.log(chalk.magenta.bold.inverse("Your Note :"));
    console.log(chalk.blue.bold(noteData.title));
    console.log('"', noteData.body, '"');
  } else {
    console.log(
      chalk.red.bold("Note With Title", title.toUpperCase(), "Not Found")
    );
  }
};

const listNotes = () => {
  debugger;
  const notes = loadNote();
  console.log(chalk.green.bold("Your Notes :"));
  notes.forEach((note) => console.log(chalk.green(note.title)));
};

//This function for add note
//Before adding note, it will load note from file and check duplicate note
const addNote = (title, body) => {
  debugger;
  const notes = loadNote();
  const duplicateNote = notes.find(
    (note) => note.title === title.toUpperCase()
  );
  if (!duplicateNote) {
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
const saveNote = (notes) => {
  debugger;
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

//This function for load data from notes.json and change to object
const loadNote = () => {
  debugger;
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
const deleteNote = (title) => {
  const notes = loadNote();
  //This for make new array with filter
  const newNotes = notes.filter((note) => note.title !== title.toUpperCase());
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
  readNote: readNote,
  addNote: addNote,
  loadNote: loadNote,
  deleteNote: deleteNote,
  listNotes: listNotes,
};
