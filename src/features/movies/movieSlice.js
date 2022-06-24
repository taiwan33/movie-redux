import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from '../../common/apis/movieApi';
import { APIKEY } from '../../common/movieApiKey';

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async (search) => {
        const response = await movieApi
            .get(`?apiKey=${APIKEY}&s=${search}&type=movie`);
        return response.data;
    })

export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
    async (search) => {
        const response = await movieApi
            .get(`?apiKey=${APIKEY}&s=${search}&type=series`);

        return response.data;
    })
export const fetchAsyncShowOrMovieDetails = createAsyncThunk(
    'movies,fetchAsyncShows',
    async (id) => {
        const response = await movieApi
            .get(`?apiKey=${APIKEY}&i=${id}&Plot=full`);
        return response.data;
    })

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
}
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {

        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            console.log("Fetching movies successful");
            return { ...state, movies: payload }
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("rejected");
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            console.log("Fetching shows successful");
            return { ...state, shows: payload }
        },
        [fetchAsyncShowOrMovieDetails.fulfilled]: (state, { payload }) => {
            console.log("Fetching details successful");
            return { ...state, selectedMovieOrShow: payload }
        },
    }
})
export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
