import { useCallback, useState } from 'react'
import './App.css'
import debounce from 'just-debounce-it'

import Movies from './components/Movies'

import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'

function App () {
  const { search, setSearch, err } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading, error } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(debounce(search => { getMovies({ search }) }, 300), [])

  const handleSubmit = e => {
    e.preventDefault()
    getMovies({ search })
  }

  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie searcher</h1>
        <form onSubmit={handleSubmit}>
          <input name='query' value={search} onChange={handleChange} placeholder='Spiderman, Interestellar, Origin...' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button>Search</button>
        </form>
        {err && <p style={{ color: 'red' }}>{err}</p>}
      </header>
      <main>
        {
          loading
            ? <p>Loading...</p>
            : <Movies movies={movies} />
        }
        {
          error && <p>{error}</p>
        }
      </main>
    </div>
  )
}

export default App
