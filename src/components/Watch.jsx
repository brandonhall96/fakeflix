//=====Imports=====//
import setAuthToken from '../utils/setAuthToken' 
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;


const Watch = (props) => {
    const [watchlist, setWatchlist] = useState([])
    

    useEffect(()=> {
        let url = REACT_APP_SERVER_URL+"/api/watchlists"
        console.log(url)
        console.log(props)
        setAuthToken(localStorage.getItem("jwtToken"))
        axios.get(url)
        .then((res)=> {
            setWatchlist(res.data.watchlists)
            console.log("here is watchlists in the initial useEffect")
            console.log(res)
        })
    },[])


    const watchMovie = watchlist.map((watch, idx) => {
        console.log(watch)
        return <div class="row row-cols-1 row-cols-md-3" key={idx}>
            <img class="card-img-top" src={watch.Poster} alt="Card image cap"  />  
            {/* <Link className=" specialButton" to={"/details/" + fav._id} > {fav.Title}</Link> */}
        
            <hr />
        </div>
    })

    return (

        <div className="row mt-4" className= "text-center">
                <h1>ALL MOVIES IN YOUR WATCHLIST</h1>
            <div className="col-md-8 offset-md-3">
                <div className="card card-body">
                <div className="text-center"></div>
                {/* <div id="moviediv" className="movie-grid"> */}
                 {watchMovie}
            </div>
        </div>
        </div>
    )
}

export default Watch;