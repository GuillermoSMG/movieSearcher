import React from 'react'

function Header ({ handleChange, handleSort, handleSubmit, sort, search, err }) {
  return (
    <header className='header'>
      <h1>Movie searcher</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input name='query' value={search} onChange={handleChange} placeholder='Spiderman, Interestellar, Origin...' />
        <button>Search</button>
        <label className='sort-label' name='sort'>Sort Alphabeticaly
          <input className='sort-input' name='sort' type='checkbox' onChange={handleSort} checked={sort} />
        </label>
      </form>
      {err && <p style={{ color: 'red' }}>{err}</p>}
    </header>
  )
}

export default Header
