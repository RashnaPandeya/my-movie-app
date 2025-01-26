import React, { useEffect, useState } from "react";
import "./Movie.css";
import axios from "axios";
import LoadMore from "./LoadMore";
import Search from "./Search";
import Title from "./Title";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const fetchMovieData = async () => {
    console.log(page);
    let url = "https://api.themoviedb.org/3/movie/popular";
    if (search !== "") {
      url = "https://api.themoviedb.org/3/search/movie";
    }
    const result = await axios.get(url, {
      params: {
        api_key: "923957623adda598d87bf801866141fb",
        page: page,
        query: search,
      },
    });
    if (search !== "") 
      setMovies([...result.data.results]);
    else
     setMovies([...movies, ...result.data.results]);
  };

  useEffect(() => {
    fetchMovieData();
  }, []);

  useEffect(() => {
    fetchMovieData();
  }, [search]);

  const onLoadMoreClick = () => {
    setPage((prevPage) => prevPage + 1);
    fetchMovieData();
  };

  const onSearchText = (data) => {
    setSearch(data);
    // fetchMovieData();
  };

  return (
    <div>
      <Search onTextChange={onSearchText} />
      <Title/>
      <div className="movie_container">
        {movies.map((movie) => {
          return (
            <div className="m_item" key={movie.id}>
              <img
                src={`http://image.tmdb.org/t/p/w500/` + movie.poster_path}
                alt={movie.title}
              />
              <br />
              {movie.title}
              <p className="m_text">
                The story follows Dom Cobb (Leonardo <br/>DiCaprio), a skilled thief
                who specializes in extracting secrets from deep within
                <br />
                the subconscious during the dream state.
              </p>
              <span> Release Date: {movie.release_date} </span>
            </div>
          );
        })}
      </div>

      <LoadMore onLoadMoreClick={onLoadMoreClick} />
    </div>
  );
};

export default Movie;
