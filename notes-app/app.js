const notes = require('./notes.js')
const yarg = require('yargs')
const chalk = require('chalk');
const { demandOption, string } = require('yargs');

// console.log(chalk.blue('SuckSex'));
// console.log(valid.isEmail('abcex.com'))

// console.log(process.argv[2])

// const cmd = process.argv[2]
// if(cmd === 'add'){
//     console.log(chalk.green('Adding'))
// }
// else if(cmd === 'remove'){
//     console.log(chalk.red('Removing'))
// }



yarg.command({
    command: 'add',
    describe: 'Will add a new note',
    builder:{
        title:{
            describe: 'Title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'body',
            demandOption: true,
            type: 'string'
        },
        
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yarg.command({
    command: 'remove',
    describe: 'Will remove a note',
    builder:{
        title:{
            describe: 'Title',
            demandOption: true,
            type: 'string'
        },
        
    },
    handler(argv){
        const fn = notes.removeNotes(argv.title)
    }
})

yarg.command({
    command: 'list',
    describe: 'listing all notes',
    handler(){
        notes.listNotes()
    }
})
yarg.command({
    command: 'read',
    describe: 'reading notes',
    builder:{
        title:{
            describe: 'Title',
            demandOption: true,
            type: 'string'
            }
        },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

 yarg.parse()