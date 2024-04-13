import { Link } from "react-router-dom";
import { Movie } from "../../types/Movie";
import { ImageSkeleton } from "../Skeletons";
import s from "./MovieCard.module.css";

const MovieCard = (props: Movie) => {
  const { 
    id, 
    backdrop, 
    name, 
    description, 
    shortDescription, 
    rating, 
    year, 
    genres, 
    countries, 
    ageRating } = props;
    
  const raitingStyles = rating.imdb >= 8 ? s.great : rating.imdb >= 5 ? s.good : s.bad;
  const desc = shortDescription ? shortDescription : ( description.slice(0, 100) + "...");

  return (
    <div className={s.wrapper}>
      <span className={`${s.raiting} ${raitingStyles}`}>{rating.imdb}</span>
      <div className={s.poster_wrapper}>
        <Link to={`movie/${id}`}>
          { !backdrop.url && !backdrop.previewUrl ? (
            <ImageSkeleton />
          ) : (
            <img
              src={backdrop.previewUrl}
              alt="movie card"
              className={s.poster_img}
              onError={({currentTarget}) => {
                currentTarget.onerror = null;
                currentTarget.src = backdrop.url;
              }}
            />
          )}
        </Link>
      </div>
      <h3 className={s.title}>
        <Link to={`movie/${id}`}>{name}</Link>
      </h3>
      <div className={s.short_description}>{desc}</div>
      <div className={s.info}>
        <div>
          <span><strong>{year}</strong></span>
          &nbsp;
          <span><strong>{ageRating}+</strong></span>
        </div>
        <div className={s.genres}>
          {genres.map((genre, i) => (
            <span key={i}>{genre.name}</span>
          ))}
        </div>

        <div className={s.countries}>
          {countries.map((country, i) => (
            <span key={i}>{country.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
