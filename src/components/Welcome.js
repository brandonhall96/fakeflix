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
    return <div class='card-deck' key={idx}>
                <div className="card">
                    <img class="card-img-top" src={mov.Poster} alt="Card image cap"  />                       <div class="card-body">
                        <h3 class="card-title">{mov.Title}</h3>
                        <p class="card-text">{mov.Year}</p>
                        <p class="card-text">{mov.Rated}</p>
                    

                        </div>
                </div>
        

       </div>
      
    
})

    return (
        <div>
            <div id="moviediv" className="movie-grid">
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