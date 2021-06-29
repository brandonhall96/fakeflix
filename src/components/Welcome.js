import setAuthToken from '../utils/setAuthToken'
import axios from 'axios';
import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import App from '../App.css'
const CONNECTION_URI = process.env.DB_URI || process.env.REACT_APP_SERVER_URL;

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
        console.log(res.data.favorites)
        setMovieData(res.data.favorites)
        
    })
}, [])

console.log(movieData)



//we will need to use a .map to itterate and render all data needed

    return (
        <div>
            <h1>All the Movies will be displayed hear from our own api call</h1>
        </div>
    )
}

export default Welcome;



// import React from "react"
// import ReactPlayer from "react-player"

// function App() {
//   return (
//     <div>
//       <ReactPlayer
//         url="https://www.youtube.com/watch?v=ug50zmP9I7s"
//       />
//     </div>