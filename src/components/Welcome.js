import setAuthToken from '../utils/setAuthToken'
import axios from 'axios';
import React , {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import App from '../App.css'
const CONNECTION_URI = process.env.DB_URI || process.env.REACT_APP_SERVER_URL;

const Welcome = (props) => {



// Api call to database will be here

const [movieData, setMovieData] = useState([]);

    
useEffect(() =>{
    let url = CONNECTION_URI+'/api/movies'
    setAuthToken(localStorage.getItem("jwtToken"))
    axios.get(url)
    .then((res) =>{
        setMovieData(res.data.favorites)
        
    })
}, [])

console.log(movieData)


useEffect(() => {
    setAuthToken(localStorage.getItem("jwtToken"))   
    
    
},[movieData])



const allMovies = movieData.map((mov, idx)=> {
    return <div className="moves" key={idx}>
        <h1>{mov.Title}</h1>
        <br></br>
        <h3>{mov.Year}</h3>
        <br></br>
        <h3>{mov.Rated}</h3>
        <img src={mov.Poster}></img>
      
        </div>
})
    



//we will need to use a .map to itterate and render all data needed

    return (
        <div>
            <h1>All the Movies will be displayed here from our own api call</h1>
       

            <div>
            {allMovies[0]}
            </div>
            <div>
            {allMovies[1]}
            </div>
            <div>
            {allMovies[2]}
            </div>
            <div>
            {allMovies[3]}
            </div>
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