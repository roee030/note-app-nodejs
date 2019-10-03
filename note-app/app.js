const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'add a new note',
    handler: function(){ console.log('using add command')}
})

console.log(yargs.argv);
