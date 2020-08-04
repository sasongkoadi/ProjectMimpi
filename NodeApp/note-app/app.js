const yargs = require("yargs");
const notes = require("./note");

// costume version
yargs.version("1.0.0");

// add command
yargs.command({
  command: "add",
  describe: "add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Write your Note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// remove command
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "What title do you want to delete?",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.deleteNote(argv.title);
  },
});

// read command
yargs.command({
  command: "read",
  describe: "read a note",
  handler: function () { console.log("reading a note");
     },
});

// add list
yargs.command({
  command: "list",
  describe: "List your notes",
  handler: function () {
    console.log("listing your notes");
  },
});

yargs.parse();
//console.log(yargs.argv)
