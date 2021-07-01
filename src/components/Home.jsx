
import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {


    return (
        <div className="text-center">
            <div className="card img-fluid" className="homeCardPic">
                <img className="card-img-top"
                    style={{ opacity: 0.4 }}
                    src="https://cutewallpaper.org/21/classic-movies-wallpapers/Classic-Horror-Wallpapers-Top-Free-Classic-Horror-.jpg"
                    alt="Card image cap"></img>

                <div class="card-img-overlay">
                    <a href="https://fontmeme.com/netflix-font/"
                        className="inactiveLink">
                        <img src="https://fontmeme.com/permalink/210701/4b36d2cb3e6d2f09586fc258e306f6f5.png" alt="netflix-font"
                        border="0" />
                    </a>
                    <p class="card-text"
                        className="homeTitle">Where you can see the top 100 movies of all time, pick out your favorites and add movies to your watchlist</p>
                        <button type="button" className="specialButton">
                        <Link
                            className="signup"
                            to="/signup"
                            style={{ textDecoration: 'none' }}>Sign Up</Link></button>{" "}
                        <button type="button" className="specialButton">
                        <Link
                            className="login"
                            to="/login"
                            style={{ textDecoration: 'none' }}>Login</Link></button>
                </div>
            </div>
        </div>


    )
}






export default Home;