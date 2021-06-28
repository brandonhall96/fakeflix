import React from 'react';

const Welcome = () => {



// Api call to database will be here
const [error, setError] = useState(null);
const [movieData, setMovieData] = useState([]);
const [isLoaded, setIsLoaded] = useState(false);
    
useEffect(() =>{
    let url = CONNECTION_URI+'/api/movie'
    setAuthToken(localStorage.getItem("jwtToken"))
    axios.get(url)
    .then((res) =>{
        setMovieData(res.data.rockets)
        
    })
}, [])



//we will need to use a .map to itterate and render all data needed

    return (
        <div>
            <h1>All the Movies will be displayed hear from our own api call</h1>
        </div>
    )
}

export default Welcome;