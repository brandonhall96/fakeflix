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
        <h3>{mov.Title}</h3>
        <br></br>
        <p>{mov.Year}</p>
        <br></br>
        <p>{mov.Rated}</p>
        
        <button type='submit'>Add to Watchlist</button>
        <button type='submit'>Add to Favorites</button>
        <br></br>
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