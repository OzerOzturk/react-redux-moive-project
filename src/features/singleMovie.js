import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const singleMovieSlice = createSlice({
  name: "singleMovie",
  initialState: {
    value: { isLoading: true, singleMovie: [], error: "" },
  },
  reducers: {
    FETCH_SINGLE_MOVIE_REQUEST: (state, action) => {
      state.value.isLoading = true;
    },
    FETCH_SINGLE_MOVIE_SUCCESS: (state, action) => {
      state.value.isLoading = false;
      state.value.singleMovie = action.payload;
      state.value.error = " ";
    },
    FETCH_SINGLE_MOVIE_FAILURE: (state, action) => {
      state.value.error = action.payload;
      state.value.isLoading = true;
      state.value.singleMovie = [];
    },
  },
});

export const {
  FETCH_SINGLE_MOVIE_REQUEST,
  FETCH_SINGLE_MOVIE_SUCCESS,
  FETCH_SINGLE_MOVIE_FAILURE,
} = singleMovieSlice.actions;
export default singleMovieSlice.reducer;

export const fetchSingleMovie = (id) => {
  return (dispatch) => {
    dispatch(FETCH_SINGLE_MOVIE_REQUEST());
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=700d3a1260c205edbb3e4e388f37e877&language=en-US`
      )
      .then((response) => {
        const singleMovie = response.data;
        dispatch(FETCH_SINGLE_MOVIE_SUCCESS(singleMovie));
        console.log(response)
      })
      .catch((error) => {
        dispatch(FETCH_SINGLE_MOVIE_FAILURE(error.message));
      });
      
  };
};


