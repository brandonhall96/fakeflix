
                {/* <div className="card-body" class="card img-fluid" className="homePic" style={{ opacity: 0.5, width: 'auto', height: 'auto' }} >
                <img  className="card-img-top" src="https://cutewallpaper.org/21/classic-movies-wallpapers/Classic-Horror-Wallpapers-Top-Free-Classic-Horror-.jpg" alt="Card image"></img>
                <div class="card-img-overlay"> */}
                    {/* <div class="shadow-lg p-3 mb-5 bg-body rounded"> */}

                    {/* <h1 className="homeTitle">Welcome to FakeFlix!</h1> */}


//======special button====//

.specialButton {
  width: 5vw;
  height: 3vw;
  position: flex;
  left: 50vw;
  top: 50vh;
  transform: translate(-50%,-80%);
  font-family: 'Varela Round', sans-serif;
  font-size: 1vw;
  letter-spacing: 0.1em;
  color: #e8e8e8;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  outline: none;
  background: linear-gradient(45deg,#000000,rgb(241, 0, 0),#000000);
  background-size: 400% 400%;
  box-shadow: 1vw 1vw 0 rgb(155, 1, 1);
  cursor: pointer;
  transition: all 0.3s ease;
}


.specialButton:hover {
    animation: gradient 10s ease infinite;
    font-size: 1vw;
    box-shadow: 0.2vw 0.2vw 0 rgb(173, 0, 0);
    color: black;
    text-decoration: none;
}


@keyframes gradient {
  50% {
    background-position: 100% 0;
  }
}



    // const favMovieDetail = favoriteDetail.map((detail, idx) => {
    //     console.log(detail)
    //     return <div class="row row-cols-1 row-cols-md-3" key={idx}>
    //         <h1 className="favTitle">{detail.Title}</h1>
    //         <img class="card-img-top" src={detail.Poster} alt="Card image cap" />

    //     </div>


    // })