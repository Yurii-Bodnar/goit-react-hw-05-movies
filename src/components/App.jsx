import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoaderSpiner from './LoaderSpiner/LoaderSpiner';

const Home = lazy(() => import('../page/Home/Home'));
const Movies = lazy(() => import('../page/Movies/Movies'));
const Reviews = lazy(()=> import('../components/Reviews/Reviews'))
const MovieDetails = lazy(()=> import('../components/MovieDetails/MovieDetails'))
const MainLoyout = lazy(()=> import('../components/MainLayout/MainLayout'))
const Cast = lazy(()=> import('../components/Cast/Cast'))

export const App = () => {
  return (
    <>
      <Suspense fallback={<LoaderSpiner/>}>
        <Routes>
          <Route path="/" element={<MainLoyout />}>
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
