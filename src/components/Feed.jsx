import React from 'react'
import Movies from './Movies'

function Feed ({ movies, loading, error }) {
  return (
    <main className='main'>
      {
      loading
        ? <p>Loading...</p>
        : <Movies movies={movies} />
    }
      {
      error && <p>{error}</p>
    }
    </main>
  )
}

export default Feed
