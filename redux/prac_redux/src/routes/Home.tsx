import { useEffect, useState, useCallback } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";
import axios from "axios";
import { MMovie } from "../model/mmovie";
import { popsortedMovies,votesortedMovies,datesortedMovies, selectMovie,defalutMovies } from "../movies/movieSlice";

import { useAppSelector, useAppDispatch } from '../app/hooks';

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const movies = useAppSelector<MMovie[]>(selectMovie);
  const movieDispatch = useAppDispatch();

  const getMovies = useCallback(async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=c0caf52837a8d0967b55547df9f1bfe3&language=ko&page=1`
      );
      movieDispatch(defalutMovies(response.data.results))
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    console.log('1');
    getMovies();
    
  }, [getMovies]);

  return (
    <div>
      <button onClick={()=>movieDispatch(popsortedMovies())}>인기도순</button>
      <button onClick={()=>movieDispatch(votesortedMovies())}>평점순</button>
      <button onClick={()=>movieDispatch(datesortedMovies())}>개봉순</button>
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
