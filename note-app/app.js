const yargs = require('yargs')

//Create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: function(){ console.log('using add command')}
})
//Create remove command

yargs.command({
    command: 'remove',
    describe: 'remove note',
    handler: function(){ console.log('using remove command')}
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

//console.log(yargs.argv)