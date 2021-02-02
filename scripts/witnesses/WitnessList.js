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
            console.log('witnessesHTMLRepresentations: ', witnessesHTMLRepresentations);
            
        }
            witnessesContainer.innerHTML += `
            <h3>Witness Statements</h3>
            ${witnessesHTMLRepresentations}`
        
    })
}



eventHub.addEventListener("witnessesButtonClicked", customEvent => {
    WitnessesList()
})