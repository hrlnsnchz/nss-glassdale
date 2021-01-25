import { getConvictions, useConvictions } from './ConvictionProvider.js'


const contentTarget = document.querySelector(".filters__crime")


export const ConvictionsSelect = () => {
    getConvictions()
    .then(  () => {
        const convictions = useConvictions()
        render(convictions)
    })
}

const render = convictionsCollection => {
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(convictionsObject => {
                    const valueToBeInNewArray = convictionsObject.name
                    console.log(valueToBeInNewArray)
                    return `<option>${valueToBeInNewArray}</option>`
                })
            }
        </select>
    `
    
}