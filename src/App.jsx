import debounce from 'just-debounce-it'
import { useCallback, useState } from 'react'
import './App.css'

import Feed from './components/Feed'
import Header from './components/Header'
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
      <Header handleChange={handleChange} handleSort={handleSort} handleSubmit={handleSubmit} sort={sort} err={err} search={search} />
      <Feed movies={movies} loading={loading} error={error} />
    </div>
  )
}

export default App
