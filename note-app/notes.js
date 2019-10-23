const fs = require('fs')
const chalk = require('chalk')

const getNotes =  () =>
{
    return "Your notes"
}

const addNotes = (title,body) =>
{
    const notes = loadNotes()
    const duplicateNote = notes.find((notes)=>notes.title === title)

        if(!duplicateNote)
        {
            notes.push({
                title: title,
                body: body
        })
        saveNotes(notes)
        console.log(chalk.blue.inverse('Add new note'))
    }
        else{
            console.log(chalk.red.inverse('This title has been used!'+ "\n"+'try a different title'))
        }
    
   

}

const saveNotes =  (notes) =>
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=>
{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON)
        return data
    }catch{
        return []
    }
}

const removeNote = (title) =>
{
    const notes = loadNotes()
    const notesToKeep = notes.filter((n)=> n.title !== title)
    if(notes.length > notesToKeep.length)
    {
        console.log(chalk.blue.inverse("Note has been remove"))
    }
    else{
        console.log(chalk.red.inverse("Note did not remove"))
    }
    saveNotes(notesToKeep);
}

const listNotes = () =>
{
    console.log(chalk.green("Your notes:"))
    data = loadNotes()
    data.forEach(list => {
        console.log(chalk.green(list.title))
    });
}

const readNote = (mytitle) =>{
    const data = loadNotes()
    const specific = data.find((note)=>mytitle === note.title)
    if(specific) {console.log(chalk.white.inverse(specific.title + " " + specific.body))}
    else{
        console.log(chalk.red.inverse("there isn't a title such as "+mytitle))
    }
}

/*
//get the bytes of the file
const dataBuffer = fs.readFileSync('1-json.json')
//change it to string var
const datajson = dataBuffer.toString();
//make it js object
const data = JSON.parse(datajson)

data.title = "Father rich"
data.author = "Roee Angel"

const bookjson = JSON.stringify(data)
fs.writeFileSync('1-json.json',bookjson)

/*
let json2 = JSON.stringify(books);
let json1 = JSON.parse(json2);

console.log(json1.title);
//console.log(json2);*/
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote

}