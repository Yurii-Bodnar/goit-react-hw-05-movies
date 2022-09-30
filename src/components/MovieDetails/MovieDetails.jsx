import { useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { getRequestMoviesDitails } from 'utils/SerchMoviesAPI';
import {
  Img,
  Section,
  Text,
  Title,
  TitleSecondary,
  Wrapper,
  Button,
  ContaineButton,
  Container
} from './MovieDetails.syled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    getRequestMoviesDitails(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  if (movieDetails.length !== 0)
    return (
      <>
      <ContaineButton>
      <Button onClick={() => navigate(location.state)} type="button">
          go back
        </Button>
      </ContaineButton>
      
        <Section>

          <div>
            <Img
              src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
              alt=""
            />
          </div>
          <Wrapper>
            <Title>{movieDetails.title}</Title>

            <Text>
              User score: {movieDetails.vote_average.toFixed(1) * 10}%
            </Text>

            <TitleSecondary>Overview</TitleSecondary>
            <Text>{movieDetails.overview}</Text>

            <TitleSecondary>Genres</TitleSecondary>
            <p>{movieDetails.genres.map(genre => genre.name + ' ')}</p>
          </Wrapper>
        </Section>
        <Container>
          <NavLink to={`/movies/${movieId}/cast`} state={location.state}>
            Cast
          </NavLink>
          <NavLink to={`/movies/${movieId}/reviews`} state={location.state}>
            Reviews
          </NavLink>

          <Outlet />
        </Container>
      </>
    );
};

export default MovieDetails;
