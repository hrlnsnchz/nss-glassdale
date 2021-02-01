export const Alibi = (criminalObj) => {
    return `
        <article class="alibis">
        <p> Name: ${criminalObj.known_associates.name}</p>
        <p>Alibi: ${criminalObj.known_associates.alibi}</p>
        </article>
`
}