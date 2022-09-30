import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import SerchFormMovie from 'components/SerchFormMovie/SerchFormMovie';
import { getRequestSearchMovies } from 'utils/SerchMoviesAPI';
import CardSearchMovies from 'components/CardSearchMovies/CardSearchMovies';
import PaginationMovies from 'components/PaginationMovies/PaginationMovies';

const Movies = () => {
  const [search, setSearch] = useSearchParams();
  const [movies, setMovie] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const query = search.get('query');
  const page = search.get('page');

  useEffect(() => {
    if (!query) return;
    getRequestSearchMovies(query, page).then(({ results, total_pages }) => {
      setMovie(results);
      setTotalPages(total_pages);
    });
  }, [query, page]);
 
  return (
    <>
      <SerchFormMovie setSearch={setSearch} />
      <CardSearchMovies movies={movies} />
      {query?<PaginationMovies page={page}  setSearch={setSearch} totalPages={totalPages} query={query}/>:null}
    </>
  );
};

export default Movies;
