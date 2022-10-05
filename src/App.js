import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Landing from './components/landing/Landing'
import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "./constants/Constants";
import { Rowpost } from './components/Rowpost';


function App() {
  const [trendingMovies, setTrendingMoviesData] = useState();
  const [netflixOriginals, setNetflixOriginals] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
      .then((res) => {
        setTrendingMoviesData(res.data.results);
      });

    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`
      )
      .then((res) => {
        setNetflixOriginals(res.data.results);
      });
  }, []);

	return (
    <div>
      <Navbar />
      <Landing />
      <Rowpost
        title="Trending Movies"
        moviesData={trendingMovies ? trendingMovies : ""}
      />
      <Rowpost
        title="Action Movies"
        moviesData={netflixOriginals ? netflixOriginals : ""}
      />
    </div>
  );
}

export default App

