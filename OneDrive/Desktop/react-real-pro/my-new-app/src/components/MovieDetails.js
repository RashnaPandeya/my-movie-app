import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./NavBar";
import axios from "axios";
import "./moviedetail.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import MovieDetailsActor from "./MovieDetailsActor";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovies] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await axios(
        `https://api.themoviedb.org/3/movie/${id}?api_key=844dba0bfd8f3a4f3799f6130ef9e335`
      );
      setMovies(response.data);
      console.log(response.data);
    };
    fetchMovieDetails();
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="rmdb-navigation">
        <div className="rmdb-navigation-content">
          <Link to="/">
            <p>Home</p>
            <p>/</p>
            <p>{movie ? movie.title : ""}</p>
          </Link>
        </div>
      </div>
      <div className="rmdb-movieinfo">
        <div className="rmdb-movieinfo-content">
          <div className="rmdb-movieinfo-thumb">
            <div className="rmdb-moviethumb">
              <img
                src={"http://image.tmdb.org/t/p/w500//" + movie.poster_path}
                alt=""
                className="moviethumb"
              />
            </div>
          </div>
          <div className="rmdb-movieinfo-text">
            <h1>{movie.vote_average}</h1>
            <h3>{movie.vote_average}</h3>
            <p>
              Kraven Kravinoff's complex relationship with his ruthless gangster
              father, Nikolai, starts him down a path of vengeance with brutal
              consequences, motivating him to become not only the greatest
              hunter in the world, but also one of its most feared.
            </p>
            <h3>IMDB RANKING</h3>
            <div className="rmdb-rating">
              <meter
                min={0}
                max={100}
                optimum={100}
                low={40}
                high={70}
                value={movie.vote_average}
              />
              <p className="rmdb-score">{movie.vote_average}</p>
            </div>
            <h3>DIReCTORS</h3>
            <p className="rmdb-director">J.C. Chandor</p>
          </div>
        </div>
      </div>
      <div className="rmdb-movieinfobar">
        <div className="rmdb-movieinfobar-content">
          <div className="rmdb-movieinfobar-content-col">
            <span className="rmdb-movieinfobar-info">Running Time: 2h 7m</span>
          </div>
          <div className="rmdb-movieinfobar-content-col">
            <span className="rmdb-movieinfobar-info">Budget: $120,000,000</span>
          </div>
          <div className="rmdb-movieinfobar-content-col">
            <span className="rmdb-movieinfobar-info">Revenue: $59,184,643</span>
          </div>
        </div>
      </div>
      <MovieDetailsActor />
    </>
  );
};

export default MovieDetails;
