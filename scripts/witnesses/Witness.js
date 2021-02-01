export const Witness = (witnessObj) => {
    return `
        <article class="witnesses">
        <p>Name: ${witnessObj.name}</p>
        <p>Statement: ${witnessObj.statements}</p>
        </article>
`
}