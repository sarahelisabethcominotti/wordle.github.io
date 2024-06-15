
//Fetch Word API

async function fetchWord() {
    try {
        const response = await fetch('https://random-word-api.herokuapp.com/word?length=5')
        if (!response.ok) {
            throw new Error (`error in fetching the API`+ response.statusText)
        }
        const data = await response.json()
        const word = data[0]
        console.log(word)
        return word
    } catch (error) {
        console.error(`there was an error with the fetch operation`)
    }
}



export {fetchWord}
