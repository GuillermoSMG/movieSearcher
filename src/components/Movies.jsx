function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    <>
      {
          hasMovies
            ? (
              <ul className='movies'>
                {movies?.map(movie => (
                  <li className='movie' key={movie?.id}>
                    <h3>{movie?.title}</h3>
                    <p>{movie?.year}</p>
                    <img src={movie?.poster} alt={movie?.title} />
                  </li>
                ))}
              </ul>
              )
            : (
              <p>No se han encontrado peliculas.</p>
              )
        }
    </>
  )
}

export default Movies