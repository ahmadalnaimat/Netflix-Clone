import React, { useState } from 'react';
import './Movie.css';
import ModalMovie from '../modalmovie/ModalMovie';

function Movie({ movie }) {
  const [isShown, setIsShown] = useState(false);

  const handleClose = () => setIsShown(false);
  const handleShowModal = () => setIsShown(true);

  return (
    <>
      <div className="card-border-wrap">
        <div className="card">
          <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
          <p>{movie.title || "No Title"}</p>
          <button onClick={handleShowModal}>
            <p><span>Add To Favorite</span></p>
          </button>
        </div>
      </div>
      <ModalMovie movie={movie} handleClose={handleClose} isShown={isShown} />
    </>
  );
}

export default Movie;
