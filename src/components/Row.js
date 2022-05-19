import React, {useState, useEffect} from 'react'
import axios from 'axios'
import instance from './axios';
import './Row.css'

function Row({url, title, poster}) {

  const [movies, setMovie] = useState([])

  useEffect(() => {
    async function getMovie(){
      const movieData = await instance.get(url)
      setMovie(movieData.data.results)
    } 
    getMovie()
  }, []);


  return (
    <div style={{color: 'white', textAlign: 'left'}}>
      <h1 style={{padding: 10+'px'}}>{title}</h1>
      <div className='movie-row'>
        {movies.map((movie) => {
            return (<img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>)
        })
        }
      </div>
    </div>
  )
}

export default Row