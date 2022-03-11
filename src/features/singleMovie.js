import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchMovie = createAsyncThunk('moviesStore/movie', (id) => {
	const movie = `https://api.themoviedb.org/3/movie/${id}?api_key=700d3a1260c205edbb3e4e388f37e877&language=en-US`;
	return axios.get(movie).then((response) =>  response.data );
});

    export const fetchMovieCredits = createAsyncThunk('moviesStore/credits', (id) => {
    	const credits = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=700d3a1260c205edbb3e4e388f37e877&language=en-US`;
    	return axios.get(credits).then((response) => response.data);
    });


const singleMovieSlice = createSlice({
	name: 'singleMoviesReducer',
	initialState: {
		movie: [],
        credits:[]
	},
	extraReducers: {
		[fetchMovie.pending](state) {
			state.movieLoading = true;
		},
		[fetchMovie.fulfilled](state, action) {
			state.movie = action.payload;
			state.movieLoading = false;
		},
        [fetchMovieCredits.pending](state) {
			state.creditsLoading = true;
		},
		[fetchMovieCredits.fulfilled](state, action) {
			state.credits = action.payload;
			state.creditsLoading = false;
		},
	},
});

export default singleMovieSlice.reducer;