import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav2 = ({getMovies}) => {
    const [searchKeyword, setSearchKeyword] = useState("fast")
    const [isLoading, setIsloading] = useState(false)
    const [movies, setMovies] = useState([])
    const checkMovies = async () => {
        setIsloading(true)
        const response = await axios.get
        (`https://www.omdbapi.com/?s='${searchKeyword}'&type=movie&apikey=8debb3a8`)
        try {
            setMovies(response.data.Search.sort((a,b) => (b.Year.slice(0,3) - a.Year.slice(0,3))))
            localStorage.setItem("searchKey", searchKeyword)
            getMovies(false, searchKeyword)
            setIsloading(false)
        } catch {
            getMovies(true, searchKeyword)
            // localStorage.setItem("searchKey", searchKeyword)
            setIsloading(false)
        }
    }
    return (
        <nav className="movies__nav--container">
            <div className="nav__overlay"></div>
            <div className="navi">
                <div className="nav__logo">
                <Link to="/" 
                    >
                        <i className="fa-solid fa-film"></i></Link>
                    <Link to="/"
                    >
                        <h1 className="nav__logo--title">
                        Movies <span className="gold">HD</span>
                    </h1></Link>
                </div>
                <ul className="nav__links">
                    <li className={`nav__link`}
                    >
                    <Link className="nav__link--anchor link__hover-effect" to="/"
                        >Home</Link>
                    </li>
                    <li className={`nav__link link__active`}
                    >
                    <Link className="nav__link--anchor link__hover-effect" to="/movies"
                        >Find A Movie</Link>
                    </li>
                    <li className="nav__link nav__link--primary">
                    <a className="nav__link--anchor no__cursor" href="">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="browse">
                <h1 className="browse__title">Browse Movies</h1>
                <div className="browse__container">
                <input
                    className="browse__input"
                    type="text"
                    placeholder="Search by title"
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    onKeyDown={(e)=>{
                        if(e.key === "Enter"){
                            checkMovies()
                        }
                    }}
                />
                <a className="browse__btn">
                    {isLoading ?
                    <i className="fa-solid fa-spinner movie__spinner"></i>
                    : <i
                    className="fa-solid fa-magnifying-glass movie__search-btn"
                    onClick={checkMovies}
                    ></i>
}
                </a>
                </div>
            </div>
        </nav>
    );
}

export default Nav2;
