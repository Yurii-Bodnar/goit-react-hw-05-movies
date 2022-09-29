import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRequestMoviesReviews } from 'utils/SerchMoviesAPI';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    getRequestMoviesReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  console.log(reviews);
  return (
    <ul>
      {reviews.length === 0 ? <p>We don`t have any reviews</p> : reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <h2>{author}</h2>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;

// {reviews.map({author,content, id}) =>{
//     return <li key={id}>
//         <h2>{author}</h2>
//         <p>{content}</p>
//     </li>
// } }
