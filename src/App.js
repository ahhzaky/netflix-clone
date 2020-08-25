import React from 'react';
import './App.css';
import ROW from "./Row/Row";
import requests from './Requests/Requests';

function App() {
  return (
    <div className="App">
      <h1>hello jack</h1>
      <ROW title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <ROW title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
};

export default App;
