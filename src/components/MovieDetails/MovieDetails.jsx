import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncShowOrMovieDetails, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../features/movies/movieSlice';

const MovieDetails = () => {
    const dispatch = useDispatch();
    const { imdbID } = useParams();
    const data = useSelector(getSelectedMovieOrShow);
    console.log(data);
    useEffect((id) => {
        dispatch(fetchAsyncShowOrMovieDetails(imdbID));
        return () => {
            dispatch(removeSelectedMovieOrShow());
        }
    }, [dispatch, imdbID])
        ;
    return (
        <div>
            {Object.keys(data).length === 0 ? (<div>...Loading</div>) : (
                <div className='grid text-center justify-between sm:grid md:flex lg:flex mt-[5%]'>
                    <div className='flex-1 grid mx-8'>
                        <span className='text-3xl'>{data.Title}</span>
                        <div className='flex gap-x-8 my-3 text-blue-300'>
                            <span className=''>IMDB Rating: {data.imdbRating}</span>
                            <span>IMDB Votes: {data.imdbVotes}</span>
                            <span>RunTime: {data.Runtime}</span>
                            <span>Year: {data.Year}</span>
                        </div>
                        <div className='space-y-3'>
                            <span> {data.Plot}</span>
                            <span className='flex'> Director:<p className='text-blue-300 pl-5'>{data.Director}</p></span>
                            <span className='flex'>Genres: <p className='text-blue-300 pl-5'>{data.Genre}</p></span>
                            <span className='flex'>Actors:<p className='text-blue-300 pl-5'> {data.Actors}</p></span>
                            <span className='flex'>Language:<p className='text-blue-300 pl-5'> {data.Language}</p></span>
                            <span className='flex'>Awards:<p className='text-blue-300 pl-5'> {data.Awards}</p></span>
                        </div>
                    </div>
                    <div className='flex-1 ml-12 flex justify-center mt-8 md:mt-0'>
                        <img src={data.Poster} alt="" />
                    </div>
                </div>
            )}
        </div>
    )
}

export default MovieDetails