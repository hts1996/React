import { selector } from "recoil";
import { movieListState } from "../atoms/movieListState";

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