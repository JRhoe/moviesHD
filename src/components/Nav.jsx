import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const [currentWindow, setCurrentWindow] = useState(window.location.href)

    useEffect(() => {
        setCurrentWindow(window.location.href)
    })

    return (
        <>
        <nav className="navi">
            <div className="nav__logo">
                <Link to="/" 
                onClick={() => setCurrentWindow(window.location.origin+"/")}>
                    <i className="fa-solid fa-film"></i></Link>
                <Link to="/"
                onClick={() => setCurrentWindow(window.location.origin+"/")}>
                    <h1 className="nav__logo--title">
                    Movies <span className="gold">HD</span>
                </h1></Link>
            </div>
            <ul className="nav__links">
                <li className={`nav__link ${currentWindow === window.location.origin+"/" && "link__active"}`}
                onClick={() => setCurrentWindow(window.location.origin+"/")}>
                <Link className="nav__link--anchor link__hover-effect" to="/"
                    >Home</Link>
                </li>
                <li className={`nav__link ${currentWindow === window.location.origin+"/movies" && "link__active"}`}
                onClick={() => setCurrentWindow(window.location.origin+"/movies")}>
                <Link className="nav__link--anchor link__hover-effect" to="/movies"
                    >Find A Movie</Link>
                </li>
                <li className="nav__link nav__link--primary">
                <a className="nav__link--anchor no__cursor" href="">Contact</a>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default Nav;
