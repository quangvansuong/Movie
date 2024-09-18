import api from './api/axiosConfig'
import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/home/Home';
// import { Header } from 'react-bootstrap/lib/Modal';
import Header from './Components/header/Header';
import Trailer from './Components/trailer/Trailer';
import Reviews from './Components/reviews/Reviews';

function App() {

  const [movies, setMovies] = useState([]);                   //  CODE TUTORIAL
  const [movie, setMovie] = useState(null);      
  const [reviews, setReviews] = useState([]);      



  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      // console.log(response.data);
      setMovies(response.data);
    }
    catch (err) {
      console.log("Error fetching movies:", err.message);
    }
  }
   const getMovieData = async(movieId) =>{
    try{
       const response = await api.get(`/api/v1/movies/${movieId}`); // Don't use '' use ``
       const sinleMovie = response.data;
       setMovie(sinleMovie);
      //  setMovies(response.data);
    } catch(error){

    }
   };

  useEffect(() => {
    getMovies();
  }, [])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route path="/" element={<Home movies={movies} />}> </Route>
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}> </Route>
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData = {getMovieData} movie={movie} reviews = {reviews} setReviews = {setReviews} />}> </Route>
          </Route>
      </Routes>

    </div>
  );
}

export default App;
