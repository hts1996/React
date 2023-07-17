import { useEffect, useState, useCallback } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import axios from "axios";
import { useRecoilState, useRecoilValue } from "recoil";
import { movieListState } from "../atoms/movieListState";
import { MMovie } from "../model/mmovie";
import { popsortState,votesortState,datesortState } from "../selectors/movieSortState";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
//   const [movies, setMovies] = useRecoilState(movieListState);
  const [movies, setMovies] = useRecoilState<MMovie[]>(movieListState);
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

  const getMovies = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=c0caf52837a8d0967b55547df9f1bfe3&language=ko&page=1`
      );
      setMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, [setMovies]);

  useEffect(() => {
    console.log('1');
    getMovies();
  }, [getMovies]);

  return (
    <div>
      <button onClick={popSort}>인기도순</button>
      <button onClick={voteSort}>평점순</button>
      <button onClick={dateSort}>개봉순</button>
      <div className={styles.container}>
        {loading ? (
          <div className={styles.loader}>
            <span>로딩 중...</span>
          </div>
        ) : (
          <div className={styles.movies}>
            {movies.length > 0 ? (
              movies.map((info) => <Movie key={info.id} info={info} />)
            ) : (
              <div>영화가 없습니다.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
