import { Axios } from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { MMovie } from '../model/mmovie';

export interface MovieState {
    value: MMovie[];
  }
  
  const initialState: MovieState = {

    value: [],
  };
export const selectMovie = (state: RootState) => state.movies.value;

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        defalutMovies:(state,action) => {
            state.value = action.payload; 
        },
        popsortedMovies: (state) => {
        state.value = [...state.value].sort((a, b) => b.popularity - a.popularity);
      },
      votesortedMovies: (state) => {
        state.value = [...state.value].sort((a, b) => b.vote_average - a.vote_average);
      },
      datesortedMovies: (state) => {
        state.value = [...state.value].sort((a, b) => {
            const dateA = new Date(a.release_date).getTime();
            const dateB = new Date(b.release_date).getTime();
            return dateB - dateA;
          });
      },
    },
  });

  export const { popsortedMovies, votesortedMovies, datesortedMovies,defalutMovies } = movieSlice.actions;


  
export default movieSlice.reducer;