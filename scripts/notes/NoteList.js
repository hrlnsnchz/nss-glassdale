import { getNotes, useNotes, deleteNote } from "./NoteProvider.js";
import { useCriminals, getCriminals } from '../criminals/CriminalProvider.js';

const contentTarget = document.querySelector('.noteListContainer')
const noteListContainer = document.querySelector('.noteList')
// // Define ye olde Evente Hubbe
const eventHub = document.querySelector('.container')

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})


const render = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

        return `
            <section class="note">
                <h4>Note about ${relatedCriminal.name}</h4>
                <p>${note.text}</p>
                <p>${note.date}</p>
                <button id="deleteNote--${note.id}">Delete</button>
            </section>
        `
    }).join("")
}

const NoteList = () => {
    getNotes()
        .then(getCriminals())
        .then(() => {
            const notes = useNotes()
            const criminals = useCriminals()

            render(notes, criminals)
        })
}
// renders newly saved notes
eventHub.addEventListener("click", event => {
    if (event.target.id === 'saveNote') {
        NoteList()
    }
})


// Note deleting function/listener
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(id).then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})