const API_KEY = '36f8fa93'

export const searchMovies = async ({ search }) => {
  const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`

  if (search === '') return null

  try {
    const response = await fetch(API_URL)
    const json = await response.json()
    const movies = json.Search

    return movies?.map(({ imdbID, Title, Year, Poster }) => ({
      id: imdbID,
      title: Title,
      year: Year,
      poster: Poster === 'N/A' ? 'https://media.comicbook.com/files/img/default-movie.png' : Poster
    }))
  } catch (err) {
    throw new Error('Error searching movies.')
  }
}
