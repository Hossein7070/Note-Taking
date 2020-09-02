// const firstname = require('./utils.js')


// const sum = firstname(10,-2)
// console.log(sum)
//---------------------------------------
// const validator = require('validator')
// const Ali = require('./notes.js') 

// const message = Ali()

// console.log(message)

// //console.log(validator.isEmail('msahidib.example.com'))
// console.log(validator.isURL('https:maohaamd.io'))

//-----------------------------------------
const chalk = require('chalk') 
const yargs = require('yargs')
const { argv } = require('yargs')
const notes = require('./notes.js')
//console.log(chalk.green('Success!'))
//console.log(chalk.bold.green.inverse('Success!'))

yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title: {
            describe: 'Note a title',
            demandOption : true,
            type : 'string'

        },
        body: {
            describe: 'body of the title',
            demandOption: true,
            type: 'string'


        }

    },
    handler: function(argv){
        // console.log('title:' + argv.title)
        // console.log('body:' + argv.body)
        notes.addNote(argv.title, argv.body)
    }

})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder:{
        title:{
            describe: 'Note a title',
            demandOption: true,
            type: 'string'
        },
        
    },
    handler: function(argv){
        notes.removeNote(argv.title)
       
    }
    

})

yargs.command({
    
    command: 'read',
    describe: 'read the notes',
    builder:{
        title:{
            describe: "title note",
            demandOPtion: true,
            type: 'string'
        },
    },
    handler: function(argv){
        //console.log('reading all the notes')
        notes.readNotes(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe: 'list the notes',
    handler: function(){
        //console.log('listing all the notes')
        notes.listNotes()
    }

})

//console.log(yargs.argv)
yargs.parse()