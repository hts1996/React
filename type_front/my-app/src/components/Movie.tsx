// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
import { MMovie } from "../model/mmovie";

type Props={
    info:MMovie;
}

const Movie:React.FC<Props>=({info})=> {
  return (
    
    <div className={styles.movie}>
        
      <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+info.poster_path} alt={info.title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${info.id}`}>{info.title}</Link>
          {info.id}
        </h2>
        <h3 className={styles.movie__year}>{info.release_date}</h3>
        <h3 className={styles.movie__year}>{info.vote_average}</h3>
        <h3 className={styles.movie__year}>{info.popularity}</h3>
        <p>{info.overview.length > 235 ? `${info.overview.slice(0, 235)}...` : info.overview}</p>
        <ul className={styles.movie__genres}>
          {info.genre_ids.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Movie;