import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from './Criminal.js'

let criminalContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()

            let criminalHTMLRepresentations = ""

            for (const criminal of criminalArray) {
                criminalHTMLRepresentations += Criminal(criminal)
            }

            criminalContainer.innerHTML = `
                <h3>Glassdale Criminals</h3>
                <section class="criminalList">
                    ${criminalHTMLRepresentations}
                </section>`
    })
}