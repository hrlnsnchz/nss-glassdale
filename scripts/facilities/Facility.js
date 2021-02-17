export const Facility = (facilityObj, criminalObj) => {
    return `
    <article class="facilities">
        <h4>${facilityObj.facilityName}</h4>
        <p>Security Level: ${facilityObj.securityLevel}</p>
        <p>Capacity: ${facilityObj.capacity}</p>
        <div>
            <h4>Criminals:</h4>
            <ul>
                ${criminalObj.map(c => `<li>${c.name}</li>`).join("")}
            </ul>
        </div>
    </article>
`
}