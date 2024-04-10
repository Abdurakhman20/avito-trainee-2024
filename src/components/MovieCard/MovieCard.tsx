import { Link } from "react-router-dom";
import { Movie } from "../../types/Movie";

import s from "./MovieCard.module.css";

const MovieCard = (props: Movie) => {
  const { id, backdrop, name, shortDescription, rating, year, genres } = props;
  const raitingStyles = rating.imdb >= 8 ? s.great : rating.imdb >= 5 ? s.good : s.bad;

  return (
    <div className={s.wrapper}>
      <span className={`${s.raiting} ${raitingStyles}`}>{rating.imdb}</span>
      <div className={s.poster_wrapper}>
        <Link to={`movie/${id}`}>
          <img 
            src={backdrop.previewUrl} 
            alt="movie card" 
            className={s.poster_img} 
            onError={({currentTarget}) => {
              currentTarget.onerror = null;
              currentTarget.src = backdrop.url;
            }} 
          />
        </Link>
      </div>
      <h3 className={s.title}>
        <Link to={`movie/${id}`}>
          {name}
        </Link>
      </h3>
      <div className={s.short_description}>
        {shortDescription}
      </div>
      <div className={s.info}>
        <span>{year}</span>
        <div className={s.genres}>
          {genres.map((genre, i) => <span key={i}>{genre.name}</span>)}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
