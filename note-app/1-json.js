const fs = require('fs')
const books={ 
    title:'Ego is the enemy',
    author:'Yaniv bucris'
}

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