# FakeFlix

Our App is called **FakeFlix** which is based off the well known movie streaming site 'Netflix'

It will demonstrate a combination of React, JavaScript, Express and MongoDB.
The App is pretty self explanatory, once a profile has been created the user will be able to login, choose movies and add them to a favorites or watchlist.

https://brandonhall96.github.io/fakeflix/

# How to use

1. First, you must create an account to have access to the website
2. Once the account has been created you will be able to login
3. Upon loggin in you will be automatically redirected to the movies
4. You will have the option to click add favorite or add watchlist to view later

## Start Up Screen
![Starting screen](/public/photos/read.jpeg)

# How it works

The App uses React which allows us to make calls to our API on the backend and render data from our database. We were able to create a login and signup page that upon being submitted will talk to the backend to authenticate the profile. After youve been authenticated youll have access to the full site and being able to explore the different pages.

# Making an API call
```
useEffect(() =>{
    let url = CONNECTION_URI+'/api/movies'
    setAuthToken(localStorage.getItem("jwtToken"))
    axios.get(url)
    .then((res) =>{
        console.log(res.data.movies) 
        setMovieData(res.data.movies)
        
    })
}, [])

useEffect(() => {
    setAuthToken(localStorage.getItem("jwtToken"))   
    
},[movieData])
```


