import { selector } from "recoil";
import { movieListState } from "../atoms/movieListState";
import axios from "axios";

export const popsortState = selector({
  key: "popsortState",
  get: ({ get }) => {
    const mod = get(movieListState);
    const sortedMovies = [...mod].sort((a, b) => {
      if (b.popularity > a.popularity) return 1;
      if (b.popularity < a.popularity) return -1;
      return 0;
    });
    return sortedMovies;
  },
});

export const getMovies = selector({
  key: "getMovies",
  get: async({get})=>{
    try{
      const mod = await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=c0caf52837a8d0967b55547df9f1bfe3&language=ko&page=1`)
      return mod.data.results
    }catch(error){
      console.log(`${error}`)
      return [];
    }
    
  }
    
  },
);


export const votesortState = selector({
  key: "votesortState",
  get: ({ get }) => {
    const mod = get(movieListState);
    const sortedMovies = [...mod].sort((a, b) => {
      if (b.vote_average > a.vote_average) return 1;
      if (b.vote_average < a.vote_average) return -1;
      return 0;
    });
    return sortedMovies;
  },
});

export const datesortState = selector({
  key: "datesortState",
  get: ({ get }) => {
    const mod = get(movieListState);
    const sortedMovies = [...mod].slice().sort((a, b) => {
      if (b.release_date > a.release_date) return 1;
      if (b.release_date < a.release_date) return -1;
      return 0;
    });
    return sortedMovies;
  },
});
