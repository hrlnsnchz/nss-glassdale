const eventHub = document.querySelector('.container')
const contentTarget = document.querySelector('.facility__button')

export const DisplayFacButton = () => {
    contentTarget.innerHTML = `<button id='displayFacilities'>Display Facilities</button>`
}


eventHub.addEventListener('click', event => {
    if (event.target.id === 'displayFacilities') {
        const customEvent = new CustomEvent("FacilitiesButtonClicked")
        eventHub.dispatchEvent(customEvent)
    }
})