import React from 'react';
import './App.css';
import ROW from "./Row/Row";
import requests from './Requests/Requests';

function App() {
  return (
    <div className="App">
      <h1>hello jack</h1>
      <ROW title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
      <ROW title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <ROW title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <ROW title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <ROW title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <ROW title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <ROW title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <ROW title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
};

export default App;
