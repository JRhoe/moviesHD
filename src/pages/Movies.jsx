import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import axios from 'axios';
import { UseGetMovies } from '../hooks/useGetMovies';
import Nav2 from '../components/Nav2';

const Movies = () => {
    const [isLoading, setIsloading] = useState(true)
    const [movies, setmovies] = useState([])
    const [sortOrder, setSortOrder] = useState("yearNew")
    const [searchType, setSearchType] = useState(!!localStorage.getItem("searchType") ? 
    localStorage.getItem("searchType") : "movie")
    const [err, setErr] = useState(false)
    const [searchKeyword, setSearchKeyword] = 
    useState(!!localStorage.getItem("searchKey") ? 
    localStorage.getItem("searchKey") : "fast")

    async function getMovies(error, keyword) {
        setIsloading(true)
        if (error) {
            setErr(error)
            setIsloading(false)
            setmovies([])
            setSearchKeyword(localStorage.getItem("searchKey"))
            return
        }
        const response = await axios.get
        (`https://www.omdbapi.com/?s='${keyword}'&type=${searchType}&apikey=8debb3a8`)
        // // console.log(response.data.Search, "initial")
        const sortedResponse = () => {
            if (sortOrder == "yearNew") {
                return response.data.Search.sort((a,b) => (b.Year.slice(0,3) - a.Year.slice(0,3)))
            } else if (sortOrder === "yearOld") {
                return response.data.Search.sort((a,b) => (a.Year.slice(0,3) - b.Year.slice(0,3)))
            } else if (sortOrder === "alphabet") {
                return response.data.Search.sort((a,b) => a.Title.localeCompare(b.Title))
            }
        }
        setmovies(sortedResponse)
        setErr(false)
        setSearchKeyword(keyword)
        // // console.log(movies, "output")
        // // UseGetMovies(searchKeyword, searchType, sortOrder)
        setIsloading(false)
    }

    useEffect(() => {
        getMovies(false, searchKeyword)
    },[sortOrder, searchType])

    return (
        <>
        <Nav2 getMovies={getMovies}/>
        <div className="search__info--container">
        <h1 className="filterd__text">
            Showing results for: <span className="search__result">{searchKeyword}</span>
        </h1>
        <div className="filter__container">
            <div className="sort__selector">
            <select
                className="fliter__select"
                name="movieSort"
                id=""
                onChange={(e) =>setSortOrder(e.target.value)}
            >
                <option value="yearNew">Year Newest</option>
                <option value="yearOld">Year Oldest</option>
                <option value="alphabet">Alphabetically</option>
            </select>
            </div>
            <div className="type__selector">
            <select
                className="fliter__select"
                name="movieType"
                id=""
                value={searchType}
                onChange={(e) => {
                    setSearchType(e.target.value)
                    localStorage.setItem("searchType", e.target.value)
                }
                }
            >
                <option value="movie">Movies</option>
                <option value="series">TV Shows</option>
            </select>
            </div>
        </div>
        </div>
        {err &&
        <h3 className="movie__error">No results found</h3>
        }
        <div className="movies__list">
            {isLoading
                ? <i className="fa-solid fa-spinner loading__spinner"></i>
                : movies.map((movie,i) => (
                    <Movie
                    key={i}
                    title={movie.Title}
                    year={movie.Year}
                    type={movie.Type}
                    poster={movie.Poster}
                    id={movie.imdbID}
                    />
                ))}
        </div>
    </>
    );
}

export default Movies;
