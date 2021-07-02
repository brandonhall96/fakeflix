//=====Imports=====//
import setAuthToken from '../utils/setAuthToken' 
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
// import {Link, Redirect} from 'react-router-dom'


const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Favorite = () => {
const [favorites, setFavorites] = useState([])

    useEffect(()=> {
        let url = REACT_APP_SERVER_URL+"/api/favorites"
        setAuthToken(localStorage.getItem("jwtToken"))
        axios.get(url)
        .then((res)=> {
            setFavorites(res.data.favorites)
            console.log("here is favorites in the initial useEffect")
        })
    },[])

   
    const favMovie = favorites.map((fav, idx ) => {
        console.log(fav)
        return <div class="row row-cols-1 row-cols-md-3" key={idx}>
            <h1 className="favTitle">{fav.Title}</h1>
            <img class="card-img-top" src={fav.Poster} alt="Card image cap"  />
            
            
        </div>

    })


    return (
        
            <div className="row mt-4" className= "text-center">
                <h1>ALL YOUR FAVORITES</h1>
            <div className="col-md-8 offset-md-3">
            
                <div className="card card-body">
                <div className="text-center"></div>
                {/* <div id="moviediv" className="movie-grid"> */}
            {favMovie}
            </div>
        </div>
        </div>
        // </div>
        
    )
}

//step 1: wrapping fav movie poster in a link so it links to new page
//app.js set up route to render favorite detail component
//when you go to that component, it makes request to api for that id provided by fav data
//wrap map in a link --> /fav/id 


export default Favorite;