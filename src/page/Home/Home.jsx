import { Link, List,Img } from './Home.styled';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRequestTrendingMovies } from 'utils/SerchMoviesAPI';
import { Item } from './Home.styled';

const Home = () => {
  const [trendingMovies, setTrendingMovis] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getRequestTrendingMovies().then(data => {
      setTrendingMovis(data.results);
    });
  });
  return (
    <List>
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
            <Item key={id}>
              <Link to={`/movies/${id}`} state={location}>
                <Img
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt={original_title}
                />
                <p>{title}</p>
                <p>{release_date}</p>
                <p>{vote_average.toFixed(1)}</p>
              </Link>
            </Item>
          );
        }
      )}
    </List>
  );
};

export default Home;
