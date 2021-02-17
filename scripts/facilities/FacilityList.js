import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"
import { getCriminalFacilities, useCriminalFacilities } from "./CriminalFacilityProvider.js"
import { Facility } from "./Facility.js"
import { getFacilities, useFacilities } from "./FacilityProvider.js"

const contentTarget = document.querySelector('.facilityContainer')
const eventHub = document.querySelector('.container')

const render = (facilities, allCriminals, cfRelationships) => {
    contentTarget.innerHTML = facilities.map(
        (facilityObject) => {
            const criminalRelationshipsForThisFacility = cfRelationships.filter(cf => cf.facilityId === facilityObject.id)
            const criminals = criminalRelationshipsForThisFacility.map(cf => {
                const matchingCriminalObject = allCriminals.find(criminal => criminal.id === cf.criminalId)
                return matchingCriminalObject
            })
            // criminals has criminal facilities data inside it
            return Facility(facilityObject, criminals)
        }
    ).join("")
}

export const FacilityList = () => {
    getCriminals()
    .then(getFacilities)
    .then(getCriminalFacilities)
    .then(() => {
        const criminals = useCriminals()
        const crimFac = useCriminalFacilities()
        const facilities = useFacilities()

        render(facilities, criminals, crimFac)
    }
    )
}


// const render = (criminalsToRender, allFacilities, allRelationships) => {
//   // Step 1 - Iterate all criminals
//   contentTarget.innerHTML = criminalsToRender.map(
//       (criminalObject) => {
//           // Step 2 - Filter all relationships to get only ones for this criminal
//           const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)

//           // Step 3 - Convert the relationships to facilities with map()
//           const facilities = facilityRelationshipsForThisCriminal.map(cf => {
//               const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
//               return matchingFacilityObject
//           })

//           // Must pass the matching facilities to the Criminal component
//           return Criminal(criminalObject, facilities)
//       }
//   ).join("")
// }







// export const CriminalList = () => {
//     // Kick off the fetching of both collections of data
//     getFacilities()
//         .then(getCriminalFacilities)
//         .then(
//             () => {
//                 // Pull in the data now that it has been fetched
//                 const facilities = useFacilities()
//                 const crimFac = useCriminalFacilities()
//                 const criminals = useCriminals()

//                 // Pass all three collections of data to render()
//                 render(criminals, facilities, crimFac)
//             }
//         )
// }

