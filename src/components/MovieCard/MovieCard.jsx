import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
    const { data } = props;
    return (
        <div className=''>
            <Link to={`/movie/${data.imdbID}`}>
                <div className='grid text-center'>
                    <span><img className='w-auto h-[350px] object-cover' src={data.Poster} alt="" /></span>
                    <span className='mt-3'>{data.Title}</span>
                    <span>{data.Year}</span>
                </div>
            </Link>
        </div>
    )
}

export default MovieCard