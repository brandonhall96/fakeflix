import setAuthToken from '../utils/setAuthToken'
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from "react";
import { Redirect } from 'react-router-dom'
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const FavDetail = (props) => {
    const [favoriteDetail, setFavoriteDetail] = useState([])
    const [redirect, setRedirect] = useState(false)
    useEffect(() => {
        let favoriteId = props.match.params.id
        let url = REACT_APP_SERVER_URL + "/api/favorites/" + favoriteId
        console.log(props.match)

        console.log(url)
        setAuthToken(localStorage.getItem("jwtToken"))
        axios.get(url)
            .then((res) => {
                console.log(res)
                setFavoriteDetail(res.data.favorites)

            })
    }, [])

    const deleteDetail = async (id) => {
        //update to .env 
        console.log(`${process.env.REACT_APP_SERVER_URL}/api/favorites/${id}`)
        console.log(id)
        setAuthToken(localStorage.getItem("jwtToken"))
        axios.delete(`${process.env.REACT_APP_SERVER_URL}/api/favorites/${id}`)
        
            .then(response => {
                setRedirect(true)
                console.log(response.data)
                props.history.push('/favorites')
            })
            .catch( err => {props.history.push('/favorites')})

    };
    if (redirect) return <Redirect to="/favorites" />


    return (
        <div className="row mt-4" className="text-center">
            <h1>Details</h1>
            <div className="col-md-8 offset-md-3">
                <div className="card card-body">
                    <div className="text-center">

                        <h1 className="favDetail">{favoriteDetail.Title}</h1>
                        <img src={favoriteDetail.Poster} alt="Card image cap"  />
                        <button type="button" className="specialButton"
                            onClick={() => deleteDetail(favoriteDetail._id)}
                        >Delete</button>
                        <hr></hr>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavDetail;