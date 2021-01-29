import {saveNote } from './NoteProvider.js'

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

const render = () => {
    contentTarget.innerHTML = `
    <form action="">    
        <label for="noteText">Text</label>
        <input type="text" id="noteText"
        <label for="noteDate">Date</label>
        <input type="date" id="noteDate"
        <label for="noteSuspect">Suspect</label>
        <input type="text" id="noteSuspect"
        <button id="saveNote">Save Note</button>
    </form>
    `
}

eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault()
    if (clickEvent.target.id === "saveNote") {
    const suspect = document.getElementById("noteSuspect").value
    const date = document.getElementById("noteDate").value
    const text = document.getElementById("noteText").value

        const newNote = {
            text: text,
            date: date,
            suspect: suspect
        }

        saveNote(newNote)
    }
})



export const NoteForm = () => {
    render()
}

