import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getRequestMoviesDitails } from 'utils/SerchMoviesAPI';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieId } = useParams();

  //   console.log(movieId);

  useEffect(() => {
    getRequestMoviesDitails(movieId).then(data => setMovieDetails(data));
  }, [movieId]);

  if (movieDetails.length !== 0)
    return (
      <>
        <div>
          <button type="button">go back</button>
          <img
            src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
            alt=""
          />

          <h1>{movieDetails.title}</h1>
          <p>User score: {movieDetails.vote_average.toFixed(1) * 10}%</p>
          <h2>Overview</h2>
          <p>{movieDetails.overview}</p>
          <h2>Genres</h2>
          <p>{movieDetails.genres.map(genre => genre.name + ' ')}</p>
        </div>
        <div>
          {/* <Cast movieId={movieId}/> */}
          <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink>
          <NavLink to={`/movies/${movieId}/reviews`}>Reviews</NavLink>
          <Outlet/>
        </div>
      </>
    );
};

export default MovieDetails;
