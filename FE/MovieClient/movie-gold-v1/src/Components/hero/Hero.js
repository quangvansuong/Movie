// import {Carousel} from 'bootstrap'
// import { Pager } from 'react-bootstrap'
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import './Hero.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'


const Hero = ({movies}) => {

  const navigate = useNavigate();

  function reviews(movieId)
  {
    navigate(`/Reviews/${movieId}`);
  }

  return (
    <div>
      <Carousel>
        {movies?.map((movie) => {
          return (
            <Paper key={movie.id}>
              <div className='movie-card-container'>
                <div className="movie-card" style={{backgroundImage: `linear-gradient(to bottom,rgba(0,0,0,0), rgba(0,0,0,1)), url("${movie.backdrops[0]}")`}}>
                  <div className='movie-detail'>
                    <div className='movie-poster'>
                      <img src={movie.poster || 'pat/to/fallback-image.jpg'} alt="Movie Poster" />
                    </div>
                    <div className='movie-title'>
                      <h4>{movie.title}</h4>
                    </div>
                    <div className="movie-buttons-container">
                      <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`} >
                      {/* <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`} > */}
                      <div className="play-button-icon-container">
                        <FontAwesomeIcon className="play-button-icon"
                            icon={faCirclePlay} 
                        />
                      </div>
                      </Link>
                      <div className="movie-review-buttons-container">
                        <Button variant = "info" onClick={() => reviews(movie.imdbId)}>Reviews</Button>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          )
        }
        )}
      </Carousel>
    </div>
  )
}

export default Hero
