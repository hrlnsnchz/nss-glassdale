import { getNotes, useNotes } from "./NoteProvider.js";
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


eventHub.addEventListener("noteStateChanged", event => {
    if (noteListContainer.innerHTML !== "") {
      NoteList()
    }
  })