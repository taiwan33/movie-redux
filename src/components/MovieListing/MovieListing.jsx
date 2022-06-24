import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    let renderMovies = '';
    let renderShows = '';

    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
            <div key={index}>
                <MovieCard data={movie} />
            </div>
        ))
    ) : (<div>{movies.Error}</div>);
    // console.log(movies);

    renderShows = shows.Response === "True" ? (
        shows.Search.map((movie, index) =>
            <div key={index}>
                <MovieCard data={movie} />
            </div>
        )
    ) : (<div>{shows.Error}</div>);

    return (
        <>
            <div className='grid place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mx-4'>
                {renderMovies}
            </div>
            <p className=' flex text-3xl justify-center py-4'>Shows</p>
            <div className='grid place-content-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mx-4'> {renderShows}</div>
        </>
    )
}

export default MovieListing;