import React, { useEffect, useState } from 'react'
import './Banner.css'
import { FaPlay, FaList } from 'react-icons/fa';
import request from './request';
import instance from './axios';

function Banner() {

  const [movie, setMovie] = useState([])

  

  useEffect(() => {
    async function getMovie(){
      const movieData = await instance.get(request.fetchOriginals)
      setMovie(movieData.data.results[Math.floor(Math.random() * movieData.data.results.length - 1)])
    } 
    getMovie()
  }, []);

  // const truncate = (string, n) => {
  //   return string || string.length > n ? string.substr(0, n-1) + '...': string 
  // }

  // const bannerStyle = {
  //   backgroundSize: 'cover',
  //   backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
  //   backgroundPosition: 'center center',
  //   color: 'white',
  // }


  return (
    <header className='banner' style={{
      backgroundSize: 'cover',
      backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      backgroundPosition: 'center center',
      color: 'white',
    }}>
      <div className='banner-contents'>
        <h1>{movie.name}</h1>
        <div className='button-flex'>
            <button className='play-btn'><FaPlay style={{marginRight: 10+'px'}}/>Play</button>
            <button className='list-btn'><FaList style={{marginRight: 10+'px'}}/>Add To List</button>
        </div>
        <p>{movie.overview}</p>
      </div>
      <div className='gradient'/>
    </header>
  )
}

export default Banner