import MovieCard from './MovieCard'

function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    <>
      {
          hasMovies
            ? (
              <ul className='movies'>
                {movies?.map(movie => (
                  <MovieCard key={movie?.id} movie={movie} />
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
