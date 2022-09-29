import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import { getRequestMoviesCast } from 'utils/SerchMoviesAPI';
import actorPlaceholder from './../../images/No_Image_Available.jpg'

const Cast = () => {
  const [casts, setCast] = useState([]);
  // console.log(movieId);
  const { movieId } = useParams();
//   console.log(movieId);

  useEffect(() => {
    getRequestMoviesCast(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);
  // console.log(casts.cast.map(cast => cast.profile_path));
  //   console.log(casts);

  // if (casts.length !== 0) return;
  return (
    <div>
      {/* <NavLink to={`/movies/${movieId}/cast`}>Cast</NavLink> */}
      <ul>
        {casts.map(cast => {
          return (
            <li key={cast.id}>
              {cast.profile_path === null ? (
                <img src={actorPlaceholder} alt="placeholder" />
              ) : (
                <img
                  src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`}
                  alt={cast.original_name}
                />
              )}

              <p>{cast.name}</p>
              <p>{cast.character}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cast;
