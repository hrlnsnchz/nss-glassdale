import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'
import { useConvictions } from './../convictions/ConvictionProvider.js'
// import { useAlibis } from '../alibis/AlibiProvider.js'
import { Alibi } from '../alibis/Alibi.js'

let criminalsContainer = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// renders the criminals when called
const render = (criminalCollection) => {
    let criminalsHTMLRepresentations = ""
  
    for (const criminal of criminalCollection) {
      criminalsHTMLRepresentations += Criminal(criminal)
    }
    
    criminalsContainer.innerHTML = `
    <h3>Criminals</h3>
    <section class="criminalsList">
    ${criminalsHTMLRepresentations}
    </section>`
  }

  export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const criminalsArray = useCriminals()
            render(criminalsArray)
        })
}

// Listen for the "crimeChosen" custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", crimeChosenEvent => {
    if (crimeChosenEvent.detail.crimeThatWasChosen !== "0") {
  
      // Get a copy of the array of convictions from the data provider
      const convictionsArray = useConvictions()
  
      // Use the find method to get the first object in the convictions array that has the same id as the id of the chosen crime
      const chosenConvictionObject = convictionsArray.find(convictionObj => {
        return convictionObj.id === parseInt(crimeChosenEvent.detail.crimeThatWasChosen)
      })
      console.log(chosenConvictionObject.name)
  
      /*
          Filter the criminals application state down to the people that committed the crime
      */
  
      // Get a copy of the array of criminals from the data provider
      const criminalsArray = useCriminals()
  
      /*
        Now that we have the name of the chosen crime, filter the criminals data down to the people that committed the crime
      */
      const filteredCriminalsArray = criminalsArray.filter(criminalObj => criminalObj.conviction === chosenConvictionObject.name)
      /*
          Then invoke render() and pass the filtered collection as
          an argument
      */
      render(filteredCriminalsArray)
    }
  })

// filters the criminals based on selected officer
  eventHub.addEventListener("officerSelected", event => {
    // How can you access the officer name that was selected by the user?
    const officerName = event.detail.officer

    // How can you get the criminals that were arrested by that officer?
    const criminals = useCriminals()
    const filteredCriminalsArray = criminals.filter(
        criminalObject => {
            if (criminalObject.arrestingOfficer === officerName) {
                return true
            }
        }
    )
    // debugger
    render(filteredCriminalsArray)
})


// Renders the associate alibis to the DOM
eventHub.addEventListener('associateId', event => {
  const contentTarget = document.querySelector('.associatesContainer')
  const selectedAlibi = event.detail.id
  
  const alibisCollection = useCriminals()
  const foundAlibiObject = alibisCollection.find(   
    alibiObject => {
      if (alibiObject.id === selectedAlibi) {
        return alibiObject.id
      }      
    }
  )
  const knownAssociatesArray = foundAlibiObject.known_associates
  
  let alibisHTMLRepresentations = ''
  const renderAlibis = (collection) => {
    for (const  alibi of collection) {
      alibisHTMLRepresentations += Alibi(alibi)
    }
    contentTarget.innerHTML = `
    <article class="alibis">
    <h4>Known Associates for ${foundAlibiObject.name}</h4>
    ${alibisHTMLRepresentations}
    </article>
`
  }
  renderAlibis(knownAssociatesArray)
})