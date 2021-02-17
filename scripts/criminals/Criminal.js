export const Criminal = (criminalObj, facilitiesObj) => {
    return `
        <article class="criminals">
        <h4>${criminalObj.name}</h4>
        <p>Age: ${criminalObj.age}</p>
        <p>Crime: ${criminalObj.conviction}</p>
        <p>Arrested by: ${criminalObj.arrestingOfficer}</p>
        <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        <div>
                <h4>Facilities:</h4>
                <ul>
                    ${facilitiesObj.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            <button id="associates--${criminalObj.id}">Show Associates</button>
        </article>
`
}

// Had to make a separate HTML converter function for functions that don't call Criminal with 3 parameters (dropdowns)
export const OgCriminal = (criminalObj) => {
    return `
        <article class="criminals">
        <h4>${criminalObj.name}</h4>
        <p>Age: ${criminalObj.age}</p>
        <p>Crime: ${criminalObj.conviction}</p>
        <p>Arrested by: ${criminalObj.arrestingOfficer}</p>
        <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
        <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
        <button id="associates--${criminalObj.id}">Show Associates</button>
        </article>
`
}