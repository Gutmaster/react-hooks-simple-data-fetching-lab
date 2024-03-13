// create your App component here
import React, {useState, useEffect} from "react"

function App(){
    const [loaded, setLoaded] = useState(false)
    const [image, setImage] = useState('')

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            setImage(data.message)
            setLoaded(true)
        })
    },[])

    return loaded ? <img src={image} alt='A Random Dog'/> : <p>Loading...</p>
}

export default App