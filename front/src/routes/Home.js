import { useEffect, useState,useCallback } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { movieListState } from "../atoms/movieListState";
import { popsortState,votesortState,datesortState } from "../selectors/moviesortState";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useRecoilState(movieListState);
  const popsortedMovies = useRecoilValue(popsortState);
  const votesortedMovies = useRecoilValue(votesortState);
  const datesortedMovies = useRecoilValue(datesortState);
  const popSort = () => {
    setMovies(popsortedMovies);
  };
  const voteSort = () => {
    setMovies(votesortedMovies);
  };
  const dateSort = () => {
    setMovies(datesortedMovies);
  };

// useEffect(() => {
//   const getMovies = () => {
//     axios({
//       method:'get',
//       url:`https://api.themoviedb.org/3/movie/now_playing?api_key=c0caf52837a8d0967b55547df9f1bfe3&language=ko&page=1`,
//     })
//       .then((response) => {
//         setMovies(response.data.results);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
//   getMovies();
//   console.log(1);
// }, [setMovies]);

const getMovies = useCallback(async () => {
  await (
  axios({
    method:'get',
    url:`https://api.themoviedb.org/3/movie/now_playing?api_key=c0caf52837a8d0967b55547df9f1bfe3&language=ko&page=1`,

  }).then((response)=>{
  setMovies(response.data.results);
  setLoading(false)})
  .catch ((error)=>{
    console.error(error)
  }))
},[setMovies]);
useEffect(() => {
console.log('124134')
getMovies()
},[getMovies]);

  return (
    <div>
      <button onClick={popSort}>인기도순</button>
      <button onClick={voteSort}>평점순</button>
      <button onClick={dateSort}>개봉순</button>
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
                overview={movie.overview}
                popularity={movie.popularity}
                vote_average={movie.vote_average}
                genre_ids={movie.genre_ids}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
