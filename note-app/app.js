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
    handler: function(builder)
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
    handler: function(){
        console.log('using remove command')
        }
})

//Create read command

yargs.command({
    command: 'read',
    describe: 'read note',
    handler: function(){ console.log('using read command')}
})
yargs.command({
    command: 'list',
    describe: 'show list',
    handler: function(){ console.log('using list command')}
})

yargs.parse();