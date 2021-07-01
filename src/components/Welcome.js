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


// const handleAddFavorite = (e) => {

//     axios.post(`${CONNECTION_URI}+/api/movies/favorites`, movieData)

// }


//write a function to add the favorited movie to the daabase and make an api call to favorites on the favoirtes page


const allMovies = movieData.map((mov, idx)=> {

    return <div class="row row-cols-1 row-cols-md-3" key={idx}>
                <div className="col mb-4" key={idx}>
                    <img class="card-img-top" src={mov.Poster} alt="Card image cap"  />     
                            <button id='butt1' type='submit'>+ Favorites</button>
                            <button id='butt2' type='submit'>+ Watchlist</button>
                            

                        </div>
                </div>
        

       

        //add onClick event to buttons

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