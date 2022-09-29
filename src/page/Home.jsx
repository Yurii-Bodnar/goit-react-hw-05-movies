import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRequestTrendingMovies } from 'utils/SerchMoviesAPI';

const Home = () => {
  const [trendingMovies, setTrendingMovis] = useState([]);
  useEffect(() => {
    getRequestTrendingMovies().then(data => setTrendingMovis(data.results));
  }, []);
  return (
    <ul>
      {trendingMovies.map(
        ({
          poster_path,
          title,
          id,
          release_date,
          original_title,
          vote_average,
        }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt={original_title}
                />
                <p>{title}</p>
                <p>{release_date}</p>
                <p>{(vote_average).toFixed(1)}</p>
              </Link>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default Home;
