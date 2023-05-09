import React from 'react'

function MovieCard ({ movie }) {
  return (
    <li className='movie'>
      <h3 className='movie-title'>{movie?.title}</h3>
      <p className='movie-year'>{movie?.year}</p>
      <img className='movie-poster' src={movie?.poster} alt={movie?.title} />
    </li>
  )
}

export default MovieCard
