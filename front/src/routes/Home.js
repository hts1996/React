import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovie] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=c0caf52837a8d0967b55547df9f1bfe3&language=ko&page=1')
        .then(res=>res.json())
    );
    console.log(json.results);
    setMovie(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
        <span>Loading...</span>
      </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              release_date={movie.release_date}
              coverImg={movie.poster_path}
              title={movie.title}
              overview={movie.overview
              }
              popularity={movie.popularity}
              vote_average={movie.vote_average}
              genre_ids={movie.genre_ids}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;