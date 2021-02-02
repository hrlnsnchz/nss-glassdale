let witnessesArray = []

export const useWitnesses = () => witnessesArray.slice()

export const getWitnesses = () => {
    return fetch('https://criminals.glassdale.us/witnesses')
    .then(response => response.json())
    .then(parsedResponse => {
        witnessesArray = parsedResponse
    })
}