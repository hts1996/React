import { useEffect,useState  } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const res = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=c0caf52837a8d0967b55547df9f1bfe3&language=ko`)
    );
    const json = await res.json();
    console.log(json);
    setMovie(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
        <span>Loading...</span>
      </div>
      ) : (
    <div className={styles.movie}>
      <img src={"https://www.themoviedb.org/t/p/w300_and_h450_bestv2"+movie.poster_path} alt={movie.title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          {movie.title}
        </h2>
        <h3 className={styles.movie__year}>{movie.release_date}</h3>
        
        <p>{movie.overview.length > 235 ? `${movie.overview.slice(0, 235)}...` : movie.overview}</p>
        <ul className={styles.movie__genres}>
          {movie.genres.map((g) => (
            <li key={g.id}>{g.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )}

  </div>
  )}

export default Detail;