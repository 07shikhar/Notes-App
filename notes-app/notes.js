const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')
const getNotes = function(s){
    return s
}

const addNote = (title, body) => {
    const readNotes = loadNotes()
    // const duplicateNotes = readNotes.filter(function(note){
    //     return note.title === title
    // })
    const duplicateNote = readNotes.find((note) => note.title === title)
    //if(duplicateNotes.length>0)
    if(!duplicateNote)
    {
        readNotes.push({
        title: title,
        body: body
    })

    savedNotes(readNotes)
    console.log("Note added")
    }
    else{
        console.log("note already Exists")
    }

}
const removeNotes = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    if(notes.length === notesToKeep.length){
        console.log(chalk.red.inverse('Note cannot be removed'))
    }
    else{
        console.log(chalk.green.inverse('Note removed'))
        savedNotes(notesToKeep)
    }

}

const savedNotes = (readNotes) => {
    const dataJSON = JSON.stringify(readNotes)
    fs.writeFileSync('notes.json',dataJSON)
}


const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const jsonData = dataBuffer.toString()
        return JSON.parse(jsonData)
    }
    catch(e){
        return []

    }
    
}
const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.green.inverse('Your notes:'))
    notes.forEach((note)=>{
        console.log(note.title)
    })
    
}
const readNotes = (title) => {
    const readingNotes = loadNotes()
    const note = readingNotes.find((note)=> note.title === title)
    if(note){
        console.log(note.title)
        console.log(note.body)
    }
    else{
        console.log("Note not found!")
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}