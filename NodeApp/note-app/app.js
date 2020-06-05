const { personData, showPersonData } = require("./utilities");
const { getNote, createFile, deleteNote, nothingToDo } = require("./note");
const yargs = require("yargs")

// costume version
yargs.version('1.0.0')

// add command
yargs.command({
	command: 'add',
	describe: 'add a new note',
	builder: {
		title: {
			describe: 'Note title'
		}
	},
	handler: function (argv) {
		console.log('adding a new note',argv)
	},
})

// remove command
yargs.command({
	command: 'remove',
	describe: 'remove a note',
	handler: function (){
		console.log('removing a note')
	}
})

// read command
yargs.command({
	command: 'read',
	describe: 'read a note',
	handler: function (){
		console.log('reading a note')
	}
})

// add list
yargs.command({
	command: 'list',
	describe: 'List your notes',
	handler: function (){
		console.log('listing your notes')
	}
})

console.log(yargs.argv)
