import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const UseGetMovies = (searchKeyword,sortOrder) => {    
    const [movies, setMovies] = useState([])
    const [isError, setError] = useState(false)
    useEffect(() => {
        const getMovies = async () => {
            const response = await axios.get
            (`https://www.omdbapi.com/?s='${searchKeyword}'&type=movie&apikey=8debb3a8`)
            try {
                setMovies(response.data.Search.sort((a,b) => (b.Year.slice(0,3) - a.Year.slice(0,3))))
            } catch {
                setError(true)
                setMovies([])
            }
        }
        getMovies()
    },[])
    return { isError, movies}
}