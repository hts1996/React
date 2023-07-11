import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id,coverImg, title,release_date, overview, genre_ids,vote_average, popularity }) {
  return (
    
    <div className={styles.movie}>
      <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{release_date}</h3>
        <h3 className={styles.movie__year}>{vote_average}</h3>
        <h3 className={styles.movie__year}>{popularity}</h3>
        <p>{overview.length > 235 ? `${overview.slice(0, 235)}...` : overview}</p>
        <ul className={styles.movie__genres}>
          {genre_ids.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  vote_average: PropTypes.number.isRequired,
  popularity: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default Movie;