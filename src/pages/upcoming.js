import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToMustWatchListIcon from '../components/cardIcons/addToMustWatchList'

const UpcomingMoviesPage = (props) => {
    const [movies, setUpcomingMovies] = useState([]);
    const favourites = movies.filter(m => m.favourite)
    localStorage.setItem('favourites', JSON.stringify(favourites))

 

  
    useEffect(() => {
      getUpcomingMovies().then(movies => {
        setUpcomingMovies(movies);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    return (
      <PageTemplate
        title='Upcoming Movies'
        movies={movies}
        action={(movie) => {
          return <AddToMustWatchListIcon movie={movie} />
        }}
      />
    );
  };
  export default UpcomingMoviesPage;