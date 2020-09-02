//const { Module } = require("module")
// const fs = require('fs')
// const chalk = require('chalk') 
// const getNote = function () {
//     return 'Your Notes ...'
// }
// const addNote = function (title, body){
// const notes =  loadNote()  
// const duplicateNotes = notes.filter(function(note){
// return note.title === title
// })
// if (duplicateNotes.length === 0){
//     notes.push({
//         title: title,
//         body: body
//     })
//     saveNote(notes)
// console.log('new node added!')
// } else{
// console.log('note has already taken')
// }


// }
// const removeNote =function(title){
// //console.log(title)
// const notes = loadNote()
// const keepNote= notes.filter(function(note){

// return note.title !== title


// })
//     if (notes.length > keepNote.length){
       
//         console.log(chalk.green.inverse('Note removed'))
//         saveNote(keepNote)}
//         else{
//             console.log(chalk.red.inverse('No note found'))
//         }
//     }
    
  
   
   




// const saveNote = function(notes){
// const datajson = JSON.stringify(notes)
// fs.writeFileSync('notes.json', datajson)
// }

// const loadNote = function(){

//     try{
//         const dataBuffer = fs.readFileSync('notes.json')
//         const dataJSON = dataBuffer.toString()
//         return JSON.parse(dataJSON)
//     } catch(e) {
//         return []
//         }
    
//             }
            
// module.exports = {
//     getNote: getNote,
//     addNote: addNote,
//     removeNote: removeNote
// }
////////////////////******************///////////////////
const fs = require('fs')
const chalk = require('chalk') 
const getNote = function () {
    return 'Your Notes ...'
}
const addNote = function (title, body){
const notes =  loadNote()  
//const duplicateNotes = notes.filter((note) => note.title === title)
const duplicatenote = notes.find((note) => note.title === title)

if (!duplicatenote){
//if (duplicateNotes.length === 0){
    notes.push({
        title: title,
        body: body
    })
    saveNote(notes)
console.log('new node added!')
} else{
console.log('note has already taken')
}


}
const removeNote =function(title){
//console.log(title)
const notes = loadNote()
const keepNote= notes.filter((note) => note.title !== title)
    if (notes.length > keepNote.length){
       
        console.log(chalk.green.inverse('Note removed'))
        saveNote(keepNote)}
        else{
            console.log(chalk.red.inverse('No note found'))
        }
    }
    
  
   
   




const saveNote = function(notes){
const datajson = JSON.stringify(notes)
fs.writeFileSync('notes.json', datajson)
}

const loadNote = function(){

    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
        }
    
            }

    const listNotes = () => {
        const notes= loadNote()
        console.log(chalk.blue.inverse('Your Notes: '))
        notes.forEach(function(note){
            console.log(note.title)
        })
        
    }
        
    const readNotes = (title) =>  {
        const notes = loadNote()
        const samenote = notes.find((note) => note.title === title)
        if (samenote){
            console.log(chalk.inverse(samenote.title)),
            console.log(samenote.body)}
            else {console.log(chalk.inverse.red("No note found"))}
        
    }

module.exports = {
    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}