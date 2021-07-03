import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
    const { handleLogout } = props;
    const { exp, id, name, email } = props.user;
    const expirationTime = new Date(exp * 1000);
    let currentTime = Date.now();
    console.log(String(expirationTime));

    if (currentTime >= expirationTime) {
        handleLogout();
        alert('Session has ended. Please login again.');
    }
    const userData = props.user ? 
    (<div>
        <h1 style={{color: 'red'}}>Profile</h1>
        <p style={{color: 'red'}}><strong>Name:</strong> { name }</p> 
        <p style={{color: 'red'}}><strong>Email:</strong> { email }</p> 
        <p style={{color: 'red'}}><strong>ID:</strong> { id }</p>
    </div>) : <h4>Loading...</h4>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div className="text-center pt-4">
            <div className="col-md-8 offset-md-2">
                <div className="card card-body">
                    <div className='text-center'>
                        {props.user ? userData : errorDiv()}
                        <button type="button" id="profilebutt" ><Link className="edit" to="/form">Edit Profile</Link></button>
                    </div>
                </div>
            </div>
        </div>
        
    );

}

export default Profile;