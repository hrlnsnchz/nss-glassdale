import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal, OgCriminal } from './Criminal.js'
import { useConvictions } from './../convictions/ConvictionProvider.js'
// import { useAlibis } from '../alibis/AlibiProvider.js'
import { Alibi } from '../alibis/Alibi.js'
import { getFacilities, useFacilities } from '../facilities/FacilityProvider.js'
import { getCriminalFacilities, useCriminalFacilities } from '../facilities/CriminalFacilityProvider.js'
import { FacilityList } from '../facilities/FacilityList.js'

let contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// Render function for criminals and facilities
  const render = (criminalsToRender, allFacilities, allRelationships) => {
    // Step 1 - Iterate all criminals
    contentTarget.innerHTML = criminalsToRender.map(
        (criminalObject) => {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            return Criminal(criminalObject, facilities)
        }
    ).join("")
}

// Gets the data for and renders criminal list using the render function
  export const CriminalList = () => {
    // Kick off the fetching of both collections of data
    getFacilities()
      .then(getCriminals)
        .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilities = useFacilities()
                const crimFac = useCriminalFacilities()
                const criminals = useCriminals()

                // Pass all three collections of data to render()
                render(criminals, facilities, crimFac)
            }
        )
}

// Listener for Facilitites button click
eventHub.addEventListener('FacilitiesButtonClicked', event => {
  const contentTarget = document.querySelector('.facilityContainer')
    FacilityList()
})

// Renders criminals based on the selections of the dropdowns
const renderSelections = (criminalCollection) => {
  let criminalsHTMLRepresentations = ""

  for (const criminal of criminalCollection) {
    criminalsHTMLRepresentations += OgCriminal(criminal)
  }
  
  criminalsContainer.innerHTML = `
  <h3>Criminals</h3>
  <section class="criminalsList">
  ${criminalsHTMLRepresentations}
  </section>`
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
      renderSelections(filteredCriminalsArray)
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
    renderSelections(filteredCriminalsArray)
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


