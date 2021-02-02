let alibis = []

export const useAlibis = ()=> alibis.slice()

export const getAlibis = () => {
    fetch('https://criminals.glassdale.us/criminals')
    .then(response => response.json())
    .then(parsedResponse =>
        alibis = parsedResponse)
    }

