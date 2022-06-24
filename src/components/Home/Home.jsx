import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice'

const Home = () => {
    const dispatch = useDispatch();
    const movieText = "Game";
    const showsText = "Game";
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showsText));
    }, [dispatch])
    return (
        <div className=''>
            <MovieListing />
        </div>
    )
}

export default Home