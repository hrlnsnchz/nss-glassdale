export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note__text">Intuition: ${noteObject.text}</div>
            <div class="note__suspect">Suspect: ${noteObject.suspect}</div>
            <div class="note__date">Date: ${noteObject.date}</div>
        </section>
    `
}