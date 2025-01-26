import React, { useEffect, useState } from "react";
import "./Movie.css";
import axios from "axios";
import LoadMore from "./LoadMore";
import Search from "./Search";
import Title from "./Title";
import { useNavigate } from "react-router-dom";
import { API_KEY, API_URL, IMAGE_URL } from "../utils/contants";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const fetchMovieData = async () => {
    console.log(page);
    let url = API_URL + "/movie/popular";
    if (search !== "") {
      url = `${API_URL}/search/movie`;
    }
    const result = await axios.get(url, {
      params: {
        api_key: API_KEY,
        page: page,
        query: search,
      },
    });
    if (search !== "") {
      setMovies([...result.data.results]);
    } else {
      setMovies([...movies, ...result.data.results]);
    }
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
  };

  const onMovieClick = (movie) => {
    navigate(`/movie-details/${movie.id}`, { state: { movie } });
  };

  return (
    <div>
      <Search onTextChange={onSearchText} />
      <Title title="Popular Movies" />
      <div className="movie_container">
        {movies.map((movie) => {
          return (
            <div
              onClick={() => onMovieClick(movie)}
              className="m_item"
              key={movie.id}
            >
              <img src={IMAGE_URL + movie.poster_path} alt={movie.title} />
              <br />
              {movie.title}
              <p className="m_text">
                The story follows Dom Cobb (Leonardo <br />
                DiCaprio), a skilled thief who specializes <br /> in extracting
                secrets from deep within
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
