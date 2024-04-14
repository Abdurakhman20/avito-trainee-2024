import { Link } from "react-router-dom";
import { Movie } from "../../types/Movie";
import { ImageSkeleton } from "../Skeletons";
import s from "./MovieCard.module.css";

const MovieCard = (props: Movie) => {
  const {
    id,
    poster,
    name,
    rating,
    year,
  } = props;

  const raitingStyles = rating?.imdb >= 8 ? s.great : rating?.imdb >= 5 ? s.good : s.bad;

  return (
    <div className={s.wrapper}>
      {rating && <span className={`${s.raiting} ${raitingStyles}`}>{rating?.imdb}</span>}
      <div className={s.poster_wrapper}>
        <Link to={`/movie/${id}`}>
          {!poster.url && !poster.previewUrl ? (
            <ImageSkeleton />
          ) : (
            <img
              src={poster.previewUrl}
              alt="movie card"
              className={s.poster_img}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = poster.url;
              }}
            />
          )}
        </Link>
      </div>
      <h3 className={s.title}>
        <Link to={`movie/${id}`}>{name}</Link>
      </h3>
      <div className={s.info}>
        <span>
          <strong>{year}</strong>
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
