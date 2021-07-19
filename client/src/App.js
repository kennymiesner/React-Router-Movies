import React, { useState, useEffect } from 'react';
// STEP 2 - React Router imports (Route, Link and Switch)
import { Route, Link, Switch } from 'react-router-dom'
import axios from 'axios';
// Components used for the different routes
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'

import SavedList from './Movies/SavedList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(res => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Switch>
        <Route path='/movies/:itemId'>
          <Movie />          
        </Route>
        <Route path='/'>
          <MovieList />
        </Route>
      </Switch>
    </div>
  );
}
