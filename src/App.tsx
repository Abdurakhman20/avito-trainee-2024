import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";
import Header from "./components/Header/Header";


function App() {

  return (
    <>
      <Header />
      <div className="app"> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movie/:id" element={<MoviePage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
