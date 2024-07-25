import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ( {title, year, type,poster,id}) => {
    return (
        <div className="movie__container">
            <Link to={`/movies/${id}`}>
                <div className="movie">
                    <figure className="movie__img--wrapper">
                    <img
                        className="movie__img"
                        src={poster}
                        alt=""
                    />
                    </figure>
                    <div className="movie__info">
                    <h1 className="movie__title">{title}</h1>
                    <div className="movie__more--info">
                        <h2 className="movie__year">{year}</h2>
                        <h2 className="movie__type">{type}</h2>
                    </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Movie;
