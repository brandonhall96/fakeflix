//=====Imports=====//
import setAuthToken from '../utils/setAuthToken' 
import React from 'react'
import axios from 'axios';
const CONNECTION_URI = process.env.DB_URI || 'http://localhost:8000';

const Favorite = () => {
// const [favorites, setFavorites] = useState([])

//     useEffect(()=> {
//         let url = CONNECTION_URI+"/api/movies"
//         setAuthToken(localStorage.getItem("jwtToken"))
//         axios.get(url)
//         .then((res)=> {
//             //setAstronauts and setting state in general is an asyncrynous action
//             setFavorites(res.data)
//             console.log(res.data.favorites)
//             // console.log(astronauts)
//             console.log("here is favorites in the initial useEffect")
//         })

//     },[])

    return (
        <h1>favorites list</h1>
    )
}

//----pass props from movies into favorites---// 

//--> whatever button thats clicked on for that movie is saved into the database

//once saved -- use history.push that will go to the links favorites page

//find user, find all favorites from collection 

export default Favorite;