import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import type { Movie } from "../../types/Movie";
import { getMovieById } from "../../api/movies";

import s from "./MoviePage.module.css";
import { Spin } from "antd";
import PersonCardList from "../../components/PersonCardList/PersonCardList";
import Seasons from "../../components/Seasons/Seasons";

const MoviePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();
  

  useEffect(() => {
    const fetchMovie = async (movieId: string) => {
      try {
        const response = await getMovieById(movieId);
        setMovie(response?.data);
      } catch (error) {
        navigate("/");
        throw error;
      }
    };
    if (id) {
      fetchMovie(id);
    }
  }, [id, navigate]);

  if (!movie) {
    return (
      <Wrapper styles={s.wrapper}>
        <div className={s.loading}>
          <Spin className={s.spinner} size="large" />
        </div>
      </Wrapper>
    );
  }

  console.log(movie);
  const { name, year, backdrop, description, rating, persons, seasonsInfo } = movie;
  const raitingStyles = rating.imdb >= 8 ? s.great : rating.imdb >= 5 ? s.good : s.bad;

  
  return (
    <>
      <Wrapper styles={s.wrapper}>
        <div className={s.flex_container}>
          <div className={s.image_wrapper}>
            <span className={`${s.raiting} ${raitingStyles}`}>
              {rating.imdb}
            </span>
            <img src={backdrop.url} className={s.image} alt="img" />
          </div>
          <div className={s.info}>
            <h1 className={s.title}>
              {" "}
              {name} ( {year} ){" "}
            </h1>
            <h2 className={s.subtitle}>О фильме:</h2>
            <p className={s.desc}>{description}</p>
          </div>
        </div>
        <PersonCardList persons={persons} />
        <Seasons seasons={seasonsInfo} />
      </Wrapper>
    </>
  );
};

export default MoviePage;
