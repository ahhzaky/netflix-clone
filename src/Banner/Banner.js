import React, { useState, useEffect } from 'react';
import axios from '../Requests/axios';
import requests from '../Requests/Requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
         const request = await axios.get(requests.fetchNetflixOriginals);
         setMovie(
             request.data.results[
                 Math.floor(Math.random() & request.data.results.lenght -1)
            ]
        );
         return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    function truncate(str, n) {
        return str?.lenght > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                // backgroundImage: `url("https://image.tmdb.org/t/p/original/sZb21d6EWKAEKZ9GrLQeMwX4cWN.jpg")`,
                backgroundPosition: "center center",
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>

                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>

                <h1 className="banner__description">{truncate(movie?.overview,150)}</h1>
            </div>

            <div className="banner--fadeBottom" /> 
        </header>
    )
}

export default Banner;
