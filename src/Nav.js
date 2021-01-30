import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'
import MovieList from './MovieList'


function Nav() {
  const [movies, setMovies] = useContext(MovieContext)
  return (
    <div>
      <h3>Kristen</h3>
      <p>List of movies: {movies.length} </p>
    </div>
  )
}

export default Nav
