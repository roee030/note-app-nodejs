const fs = require('fs')

const getNotes = function ()
{
    return 'Your Notes...'
}

const addNotes = function(title,body)
{
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(notes){
        return notes.title === title
    })

        if(duplicateNotes.length === 0)
        {
            notes.push({
                title: title,
                body: body
        })
        saveNotes(notes)
        console.log('Add new note')
    }
        else{
            console.log('This title has been used!'+ "\n"+'try a different title')
        }
    
   

}

const saveNotes = function (notes)
{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = function()
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
    addNotes: addNotes
}