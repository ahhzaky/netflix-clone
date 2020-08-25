import React, { useState,  useEffect } from 'react';
import axios from "../Requests/axios";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title,fetchUrl }) {

    const [movies, setMovies] = useState([]);
    
    // a sniipet of code wich runs based on specific condition
    useEffect(() => {
        //if[], run once when the loads, and dont run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]);

    console.table(movies);

    return (
        <div className="rowo">
            <h2>{title}</h2>

            <div className="row__posters">

                {movies.map(movie => (
                    <img className="row__poster" src={`${base_url}${movie.poster_path}`} alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row;
