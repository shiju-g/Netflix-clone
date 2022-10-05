import React,{useEffect,useState} from 'react'
import './Landing.css'
import axios from 'axios'
import { API_KEY } from '../../constants/Constants'


function Landing() {
  const [landMovies,setLandMovies] = useState([])
  console.log("landMOvies",landMovies)

    useEffect(() => {
        axios
          .get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
          )
          .then((res) => {
            setLandMovies(res.data.results);
          });
    }, [])
    return (
      <div
        className="land"
        style={{
          background: `url('https://image.tmdb.org/t/p/w500/${
            landMovies.length !== 0 ? landMovies[8].backdrop_path : ""
          }')`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="contents">
          <h1>{landMovies.length !== 0 ? landMovies[8].name : ""}</h1>
          <p className="sub-head">{landMovies.length !== 0 ? landMovies[8].overview : ""}</p>
          <p className="para">{`Release Date: ${landMovies.length !== 0 ? landMovies[8].first_air_date: ""}`}</p>
        </div>
      </div>
    );
}

export default Landing
