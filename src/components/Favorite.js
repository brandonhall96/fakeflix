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
        return <div class="row row-cols-1 row-cols-md-3" key={idx}>
            <img class="card-img-top" src={fav.Poster} alt="Card image cap"  />
        </div>

    })


    return (
        
            <div className="row mt-4">
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

//----pass props from movies into favorites---// 

//--> whatever button thats clicked on for that movie is saved into the favorites api -- get or show? 

//once saved -- use history.push that will go to the links favorites page

//find user, find all favorites from collection 

export default Favorite;