import Home from "page/Home";
import Movies from "page/Movies";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLoyout from "./MainLayout/MainLayout";

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<MainLoyout />}>
        <Route index element={<Home/>} />
        <Route path="/movies" element={<Movies/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
    </>
  );
};
