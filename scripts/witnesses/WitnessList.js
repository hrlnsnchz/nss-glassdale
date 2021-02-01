import { Witness } from "./Witness.js"
import { getWitnesses, useWitnesses } from "./WitnessProvider.js"

const eventHub = document.querySelector('.container')
const witnessesContainer = document.querySelector(".witnessesContainer")

export const WitnessesList = () => {
    getWitnesses()
    .then(() => {
        const witnessesArray = useWitnesses()


        let witnessesHTMLRepresentations = ''

        for (const witness of witnessesArray) {
            witnessesHTMLRepresentations += Witness(witness) 
            
        }
            witnessesContainer.innerHTML = `
            <h3>Witness Statements</h3>
            <section class='witnessesList'>
            ${witnessesHTMLRepresentations}
            </section>`
        
    })
}



eventHub.addEventListener("witnessButtonClicked", customEvent => {
    Witness
})