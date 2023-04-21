import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setErr] = useState(null)
  const prevSearch = useRef(search)

  const getMovies = useCallback(
    async ({ search }) => {
      if (search === prevSearch.current) return

      try {
        setLoading(true)
        setErr(null)
        prevSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (error) {
        setErr(error.message)
      } finally {
        setLoading(false)
      }
    }, []
  )

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, error, loading }
}
