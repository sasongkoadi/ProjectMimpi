const fs = require("fs");
const chalk = require("chalk").default;

function createFile(file) {
  var data = file + ".txt";
  return data;
}

function getNote(file, notes) {
  fs.appendFileSync(file, notes);
  return console.log(
    chalk.cyanBright.inverse(notes) +
      chalk.red.bold.inverse(" Succ") +
      chalk.blueBright.bold.underline.inverse("ess")
  );
}

function deleteNote(file) {
  fs.unlink(file, function (err) {
    if (err) throw err;
    console.log(chalk.inverse.red("File has deleted"));
  });
}

function nothingToDo() {
  return console.log(chalk.inverse.whiteBright.underline("Nothing to do"));
}

module.exports = {
  getNote,
  createFile,
  deleteNote,
  nothingToDo,
};
