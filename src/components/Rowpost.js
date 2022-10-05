import React,{useState} from 'react'
import YouTube from 'react-youtube';
import axios from 'axios';

export const Rowpost = ({moviesData, title }) => {
  const [youtubeUrl, setyoutubeUrl] = useState();

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <>
      <div className="rowpost">
        <p className="movie mt-3" style={{ color: "white" }}>
          {title}
        </p>
        <div className="posters">
          <div className="poster">
            {moviesData &&
              moviesData.map((item, index) => (
                <img
                  key={index}
                  onClick={() => {
                    axios
                      .get(
                        `https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=f0bde51db52e9c6388d864e6ab433ac6&language=en-US`
                      )
                      .then((Response) => {
                        if (Response.data.results.length !== 0) {
                          setyoutubeUrl(Response.data.results);
                        } else alert("no videos available for selected movie");
                      })
                      .catch((error) => {
                        console.log("error message", error);
                      });
                  }}
                  alt="kjasdklf"
                  src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                />
              ))}
          </div>
        </div>
        {youtubeUrl && youtubeUrl.length !== 0 && (
          <YouTube videoId={youtubeUrl[0].key} opts={opts} />
        )}
      </div>
      {/* trending movies */}
      {/* <div className="rowpost">
        <p className="movie mt-3" style={{ color: "white" }}>
          Trending Movies
        </p>
        <div className="posters">
          <div className="poster">
            {trendingMovies &&
              trendingMovies.results.map((item, index) => (
                <img
                  onClick={() => {
                    axios
                      .get(
                        `https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=f0bde51db52e9c6388d864e6ab433ac6&language=en-US`
                      )
                      .then((Response) => {
                        if (Response.data.results.length !==0) {
                          setyoutubeUrl(Response.data.results);
                        } else alert("no videos available for selected movie");
                      })
                      .catch((error) => {
                        console.log("error message", error);
                      });
                  }}
                  key={index}
                  alt="ijlskdf"
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
              ))}
          </div>
        </div>
      </div> */}
    </>
  );
};
