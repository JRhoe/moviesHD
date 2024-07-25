import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../components/Nav';

const MovieInfo = () => {
    const { movieID } = useParams();
    const [movie, setMovie] = useState({})
    const [isLoading, setIsloading] = useState(true)

    useEffect(()=> {
        const setUpMovie = async () => {
            const response = await axios.get
            (`https://www.omdbapi.com/?i=${movieID}&apikey=8debb3a8`)
            setMovie(response.data)
            setIsloading(false)
        }
        setUpMovie()
    },[])
    // console.log(movie)
    return (
        isLoading ?
        <>
            <Nav/>
            <div id="movies__body">
            <main id="movies__main">
                <div className="movies__container">
                <div className="row">
                    <div className="movie__selected--top">
                    <Link to="/movies" className="movie__link">
                    <div className='left__skeleton'></div>
                    </Link>
                    <Link to="/movies" className="movie__link">
                        <h2 className="movie__selected--title--top"><div className='title__skeleton'></div></h2>
                    </Link>
                    </div>
                    <div className="movie__selected">
                    <figure className="movie__selected--figure">
                        <div className='img__skeleton'></div>
                    </figure>
                    <div className="movie__selected--description">
                        <h2 className="movie__selected--title"><div className='desc__skeleton'></div></h2>
                        <div className="movie__summary">
                        <h3 className="movie__summary--title"><div className='desc__skeleton'></div></h3>
                        <p className="movie__summary--para">
                        <div className='plot__skeleton'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem amet debitis adipisci? Ad totam illo saepe nisi iure tempore quibusdam accusamus blanditiis hic veniam. Placeat amet similique aut at quia.
                        </div>
                        </p>
                        <p className="movie__summary--para">
                        <div className='desc2__skeleton'></div>
                        <div className='desc__skeleton'></div>
                        <div className='desc2__skeleton'></div>
                        <div className='desc__skeleton'></div>
                         <div className='desc__skeleton'></div>
                        </p>
                        </div> 
                        <div className='desc__skeleton'></div>
                    </div>
                    </div>
                </div>
                </div>
            </main>
            </div>
    </> :
        <>
            <Nav/>
            <div id="movies__body">
            <main id="movies__main">
                <div className="movies__container">
                <div className="row">
                    <div className="movie__selected--top">
                    <Link to="/movies" className="movie__link">
                        <i class="fa-solid fa-left-long"></i>
                    </Link>
                    <Link to="/movies" className="movie__link">
                        <h2 className="movie__selected--title--top">{movie.Title}</h2>
                    </Link>
                    </div>
                    <div className="movie__selected">
                    <figure className="movie__selected--figure">
                        <img 
                        src={movie.Poster} 
                        alt="" 
                        className="movie__selected--img"/>
                    </figure>
                    <div className="movie__selected--description">
                        <h2 className="movie__selected--title">{movie.Genre}</h2>
                        <div className="movie__summary">
                        <h3 className="movie__summary--title">Summary</h3>
                        <p className="movie__summary--para">
                        {movie.Plot}
                        </p>
                        <p className="movie__summary--para">
                            <b>Rated: </b>{movie.Rated}<br/>
                            <b>Released: </b>{movie.Released}<br/>
                            <b>Actors: </b>{movie.Actors}<br/>
                            <b>Runtime: </b>{movie.Runtime}<br/>
                            <b>Director: </b>{movie.Director}<br/>
                        </p>
                        </div> 
                            <a href=
                            {`https://www.google.com/search?q=${movie.Title} ${movie.Type}`} target="_blank">
                            <button className="btn"> 
                               Watch Movie
                            </button>
                            </a>
                    </div>
                    </div>
                </div>
                </div>
            </main>
            </div>
    </>
    );
}

export default MovieInfo;
