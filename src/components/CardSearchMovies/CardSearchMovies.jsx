import {  useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Img, Item, List,Link } from './CardSearchMovies.styled';



const CardSearchMovies = ({ movies }) => {
    const location = useLocation()
  return (
    <List>
      {movies.map(
        ({
          id,
          poster_path,
          title,
          original_title,
          release_date,
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
                <p>{(vote_average).toFixed(1)}</p>
              </Link>
            </Item>
          );
        }
      )}
    </List>
  );
};

CardSearchMovies.propTypes = {
    movies:PropTypes.arrayOf(PropTypes.object)
}

export default CardSearchMovies;


