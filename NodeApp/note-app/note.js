const fs = require("fs");
const chalk = require("chalk").default;

function createFile(file) {
  var data = file + ".txt";
  return data;
}

function getNote(file, notes) {
  fs.appendFileSync(file, notes);
  return console.log(chalk.green(notes));
}

module.exports = {
  getNote,
  createFile,
};
