import React, { useEffect, useState } from 'react';
import largePic from '../assets/5250.jpg';
import smallPic from '../assets/3902151.jpg';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import Nav from '../components/Nav';

const Home = () => {
    const navigate = useNavigate()
    const [searchKeyword, setSearchKeyword] = useState("fast")
    const [isLoading, setIsloading] = useState(false)
    const [err, setErr] = useState(false)
    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        setIsloading(true)
        const response = await axios.get
        (`https://www.omdbapi.com/?s='${searchKeyword}'&type=movie&apikey=8debb3a8`)
        try {
            setMovies(response.data.Search.sort((a,b) => (b.Year.slice(0,3) - a.Year.slice(0,3))))
            localStorage.setItem("searchKey", searchKeyword)
            navigate("/movies")
        } catch {
            setErr(true)
            setMovies([])
            setIsloading(false)
        }
    }
    return (
        <>
            <Nav/>
            <main>
            <div className="container">
                <div className="row">
                <div className="main">
                    <h1 className="title">
                    World's more trusted movie<br />
                    watching platform
                    </h1>
                    <h2 className="sub-title">
                    Find a movie to watch on Movies <span className="gold">HD</span>
                    </h2>
                    <div className="main__search--container">
                    <input
                        className="main__search--input"
                        type="text"
                        placeholder="Find a movie..."
                        onChange={(e) => {
                            setErr(false)
                            setSearchKeyword(e.target.value)}}
                        onKeyDown={(e)=>{
                            if(e.key === "Enter"){
                                getMovies()
                            }
                        }}
                    />
                    <button className="main__search--btn"
                    onClick={getMovies}>
                        {isLoading ?
                        <i className="fa-solid fa-spinner home__spinner"></i>:
                        <i className="fa-solid fa-magnifying-glass home__search-btn"></i>
                        }
                    </button>
                    </div>
                    {err &&
                    <h3 className="home__error">No results found for: '{searchKeyword}'</h3>
                    }
                </div>
                <figure className="main__img--wrapper">
                    <img className="main__img img1" src={largePic} alt="" />
                    <img className="main__img img2" src={smallPic} alt="" />
                </figure>
                </div>
            </div>
            </main>
        </>
    );
}

export default Home;
