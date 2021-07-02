
//=========================ASTRONAUT APPLICATION===================================//
import setAuthToken from '../utils/setAuthToken'
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const CONNECTION_URI = process.env.DB_URI || process.env.REACT_APP_SERVER_URL;

const Form = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [hasPosted, setHasPosted] = useState(false)

//============function to take in value====================//
const handleName = (e) => {
setName(e.target.value)
}

const handleEmail = (e) => {
    setEmail(e.target.value)
}




//===========SUBMIT-FORM=====================//
const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {name, email }
    let url = CONNECTION_URI+"/api/profiles"
    console.log(`Yo - database ${url} is working!!`)   
    await setAuthToken(localStorage.getItem("jwtToken"))
    axios.put(url, payload)
    .then( res => {
        console.log(res.data);
        props.history.push('/profiles')
    })
    .catch(err => {
        console.log(err)
    })
}




    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Update Profile</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type='text' name='name' value={name} onChange={handleName} className='form-control' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Email</label>
                            <input type='email' name='email' value={email} onChange={handleEmail} className='form-control' />
                        </div>
                        <button type='submit' className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form