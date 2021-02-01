let witnessesArray = []

export const useWitnesses = () => witnessesArray.splice()

export const getWitnesses = () => {
    return fetch('https://criminals.glassdale.us/witnesses')
    .then(response => response.json())
    .then(parsedResponse => {
        witnessesArray = parsedResponse
        console.log('witnessesArray: ', witnessesArray)})
}