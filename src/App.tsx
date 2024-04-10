import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";

import { api } from "./api/index";

function App() {

  const getMovies = async () => {
    try {
      const response = await api.movies.getMovieById(666, {});
      console.log(response?.data);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div className="app"> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;
