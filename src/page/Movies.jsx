import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import SerchFormMovie from 'components/SerchFormMovie/SerchFormMovie';
import { getRequestSearchMovies } from 'utils/SerchMoviesAPI';
import CardSearchMovies from 'components/CardSearchMovies/CardSearchMovies';


const Movies = () => {
  const [search, setSearch] = useSearchParams();
  const [movies, setMovie] = useState([]);

  const query = search.get('query');
  const page = search.get("page");
//   console.log(page);
//   console.log(query);
//   console.log(useSearchParams);

  useEffect(()=>{
    if(!query)return;
        getRequestSearchMovies(query,page).then((data)=>setMovie(data.results))
    
  },[query,page])
  return (
    <>
      <SerchFormMovie setSearch={setSearch}/>
      <CardSearchMovies movies={movies}/> 
    </>
  );
};

export default Movies;

