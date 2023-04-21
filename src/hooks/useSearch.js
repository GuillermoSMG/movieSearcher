import { useState, useEffect, useRef } from 'react'

export const useSearch = () => {
  const [search, setSearch] = useState('')
  const [err, setErr] = useState(null)
  const isFirtsInput = useRef(true)

  useEffect(() => {
    if (isFirtsInput.current) {
      isFirtsInput.current = search === ''
      return
    }

    if (search.startsWith(' ')) return
    setSearch(search)

    if (search === '') {
      setErr('Debe ingresar una película.')
      return
    }

    if (search.match(/^\d+$/)) {
      setErr('No se puede buscar una película con un número.')
      return
    }

    if (search.length < 2) {
      setErr('La búsqueda debe tener al menos 2 caracteres.')
      return
    }

    setErr(null)
  }, [search])

  return { search, setSearch, err }
}
