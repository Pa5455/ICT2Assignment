import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getPersons} from '../api/tmdb-api'


const ActorsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('persons', getPersons)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const persons = data.results;


  return (
    <PageTemplate
        title="Discover Popular People"
        persons={persons}
        
      />
  );
};

export default ActorsPage;