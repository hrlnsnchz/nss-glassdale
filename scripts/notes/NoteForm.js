import { getCriminals, useCriminals } from '../criminals/CriminalProvider.js'
import {saveNote } from './NoteProvider.js'

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")

let criminalArray = []

export const NoteForm = () => {
    getCriminals()
        .then(() => {
            criminalArray = useCriminals()
            render(criminalArray)
        })
}

const render = (criminalArray) => {
    
    contentTarget.innerHTML = `
    <form action="">    
        <label for="noteText">Text</label>
        <input type="text" id="noteText"
        <label for="noteDate">Date</label>
        <input type="date" id="noteDate"
        <label for="saveNote">Save Note</label>
        <button id="saveNote">Save Note</button>
    </form>
    <select id="noteForm--criminal" class="criminalSelect">
    <option value="0">Please select a criminal...</option>
        ${criminalArray.map(criminal => `<option value="${criminal.id}">${criminal.name}</option>`).join("")}
    </select>
    `
}


eventHub.addEventListener("click", clickEvent => {
    clickEvent.preventDefault()
    if (clickEvent.target.id === "saveNote") {
    const suspect = document.getElementById("noteForm--criminal").value
    const date = document.getElementById("noteDate").value
    const text = document.getElementById("noteText").value

        const newNote = {
            text: text,
            date: date,
            criminalId: parseInt(suspect)
        }

        saveNote(newNote)
    }
})





