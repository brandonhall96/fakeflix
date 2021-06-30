import setAuthToken from '../utils/setAuthToken'
import axios from 'axios';
import React , {useState, useEffect} from 'react'
import App from '../App.css'
const CONNECTION_URI = process.env.DB_URI || 'http://localhost:8000';

const Welcome = (props) => {

const [movieData, setMovieData] = useState([]);

useEffect(() =>{
    let url = CONNECTION_URI+'/api/movies'
    setAuthToken(localStorage.getItem("jwtToken"))
    axios.get(url)
    .then((res) =>{
        console.log(res.data.movies)
        setMovieData(res.data.movies)
        
    })
}, [])

console.log(movieData)


useEffect(() => {
    setAuthToken(localStorage.getItem("jwtToken"))   
    
    
},[movieData])


const allMovies = movieData.map((mov, idx)=> {
    return <div className="moves" key={idx}>
        <div>
        <h1>{mov.Title}</h1>
        <br></br>
        <h3>{mov.Year}</h3>
        <br></br>
        <h3>{mov.Rated}</h3>
        <img src={mov.Poster}></img>
        </div>
      
        </div>
})

    return (
        <div>
            <h1>All the Movies will be displayed here from our own api call</h1>
       
            <div>
            {allMovies}
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