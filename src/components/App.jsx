import Home from "page/Home";
import Movies from "page/Movies";
import { Navigate, Route, Routes } from "react-router-dom";
import Cast from "./Cast/Cast";
// import Cast from "./Cast/Cast";
import MainLoyout from "./MainLayout/MainLayout";
import MovieDetails from "./MovieDetails/MovieDetails";
import Reviews from "./Reviews/Reviews";

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainLoyout />}>
        <Route index element={<Home/>} />
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/movies/:movieId" element={<MovieDetails/>}>
        <Route path="cast" element={<Cast/>}/>
        <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
    </>
  );
};
