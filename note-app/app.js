const yargs = require('yargs')
const notes = require('./notes')
//Create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    //builder is an object that define all the arguments options
    builder: {
        title:{
        describe:'Note Title',
        demandOption: true,
        type: 'string'
    },
        body:{
            describe:'Note Body',
            demandOption: true,
            type: 'string'
        }
},
    handler(builder)
        {
         notes.addNotes(builder.title,builder.body)
         //console.log('Title: '+builder.title+"\n"+'Body msg: '+builder.body)
        }
})

//Create remove command

yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(builder){
        notes.removeNote(builder.title)
        }
})

//Create read command

yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title:{
            describe: 'Note to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(builder){ notes.readNote(builder.title)}
})

//Listing the notes
yargs.command({
    command: 'list',
    describe: 'show list',
    handler(){ notes.listNotes()}
})

yargs.parse();