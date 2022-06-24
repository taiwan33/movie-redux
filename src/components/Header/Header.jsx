import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

const Header = () => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchAsyncMovies(search));
        dispatch(fetchAsyncShows(search));
        setSearch('')
    }
    return (
        <div className='flex justify-center items-center gap-x-5 py-4'>
            <span className='text-2xl'>
                <Link to={'/'}>
                    MovieAPP
                </Link>
            </span>
            <form onSubmit={submitHandler}>
                <input className='text-gray-500 border px-2 py-1' placeholder='Search Movie or Shows' onChange={(e) => setSearch(e.target.value)} value={search} type='search' />
                <button className='mx-2 px-2 py-1 border'>Search</button>
            </form>
        </div>
    )
}

export default Header