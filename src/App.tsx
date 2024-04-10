import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";

import { api } from "./api/index";

function App() {

  const searchMovies = async () => {
    try {
      const response = await api.movies.searchMovie("1+1");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    searchMovies();
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
