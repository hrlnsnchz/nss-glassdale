const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.witnessesContainer')

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "witnessesButton") {
        console.log('clickEvent: ', clickEvent);
        const customEvent = new CustomEvent("witnessesButtonClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const WitnessStatementsButton = () => {
    contentTarget.innerHTML = "<button id='witnessesButton'>Witness Statements</button>"
}