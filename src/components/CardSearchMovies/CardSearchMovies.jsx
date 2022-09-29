import { Link } from 'react-router-dom';
import { Img, Item, List } from './CardSearchMovies.styled';

const CardSearchMovies = ({ movies }) => {
//   console.log(movies);
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
              <Link to={`/movies/${id}`}>
                <Img
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  alt={original_title}
                  // target="_blank"
                  // rel="noreferrer"
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

export default CardSearchMovies;
