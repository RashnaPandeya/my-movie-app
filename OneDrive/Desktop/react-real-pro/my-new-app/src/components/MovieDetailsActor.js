import React, { useEffect, useState } from "react";
import "./moviedetailactor.css";
import Title from "./Title";
import axios from "axios";

const MovieDetailsActor = ({ movieId }) => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=844dba0bfd8f3a4f3799f6130ef9e335`
        );
        setActors(response.data.cast || []);
      } catch (error) {
        console.error("Error fetching actors:", error);
      }
    };
    fetchActors();
  }, [movieId]);

  return (
    <div className="rmdb-grid">
      <Title title="Actor" />
      <div className="rmdb-grid-content">
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//u0AqTz6Y7GHPCHINS01P7gPvDSb.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Jim Carrey</span>
            <span className="rmdb-actor-character">
              Ivo Robotnik / Gerald Robotnik
            </span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//lJVYjPj0P6uvVxNrTy4xO2645D0.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Ben Schwartz</span>
            <span className="rmdb-actor-character">Sonic (voice)</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//8RZLOyYGsoRe9p44q3xin9QkMHv.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Keanu Reeves</span>
            <span className="rmdb-actor-character">Shadow (voice)</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//be1bVF7qGX91a6c5WeRPs5pKXln.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Idris Elba</span>
            <span className="rmdb-actor-character">Knuckles (voice)</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//y3Kl5tCX1XD6uyL9wefTRbEXTwj.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Colleen O'Shaughnessey</span>
            <span className="rmdb-actor-character">Tails (voice)</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//mk142GG0saiSXALY6V4wWcmPROW.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">James Marsden</span>
            <span className="rmdb-actor-character">Tom</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//1zTXufyuQFPXVthryH7KVoZAfb7.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Tika Sumpter</span>
            <span className="rmdb-actor-character">Maddie</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//vpF3R2YRCGHseGevmDAhftmOPkO.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Lee Majdoub</span>
            <span className="rmdb-actor-character">Agent Stone</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//vDr20j128E6Uo1XZLChPoW7FbMG.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Krysten Ritter</span>
            <span className="rmdb-actor-character">Director Rockwell</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//yY13PEaVbPoXT5MkitVxTfdAZnU.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Adam Pally</span>
            <span className="rmdb-actor-character">Wade</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//x5KdL3QoS4YuozVpfuPsu3MLwwf.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Natasha Rothwell</span>
            <span className="rmdb-actor-character">Rachel</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//aLDTjeQLU8TXsEwjWWoas5kXPTu.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Shemar Moore</span>
            <span className="rmdb-actor-character">Randall</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//tcAQAzqk1z0PsVXqi8HODOVPQoY.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Alyla Browne</span>
            <span className="rmdb-actor-character">Maria</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//sMDuFSvna90gGV0jkOK7PDzQC8g.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Tom Butler</span>
            <span className="rmdb-actor-character">Commander Walters</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//x7x4NvDauuQ7HA6psLZYZ6m3zTd.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Jorma Taccone</span>
            <span className="rmdb-actor-character">Kyle Lancebottom</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//8ewDswRAN8ovgCClAZp4rZkiw7.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Sofia Pernas</span>
            <span className="rmdb-actor-character">Gabriella</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//irx5BVVLSQWY9m5NrhqyxPekwIY.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Cristo Fernández</span>
            <span className="rmdb-actor-character">Pablo / Juan</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//kINM0yfNAznf777qc9srnbjovcZ.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">James Wolk</span>
            <span className="rmdb-actor-character">Young Walters</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//gh0E6HmgetPzfIMUBDqrehKkrlc.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Brett Tutor</span>
            <span className="rmdb-actor-character">Prison Guard</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//nTzBbbqpl8DZOjtiGUKDU8LiIEf.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Richard Sutton</span>
            <span className="rmdb-actor-character">
              G.U.N. HQ Security Guard
            </span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//hwlsIMEImnpOc046cROxtVyJ2Ao.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Will Austin</span>
            <span className="rmdb-actor-character">G.U.N. Heli Pilot</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img src="./images/no_image.jpg" alt="" />
            <span className="rmdb-actor-name">Bola Okun</span>
            <span className="rmdb-actor-character">Military Man</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img src="./images/no_image.jpg" alt="" />
            <span className="rmdb-actor-name">Reggie Banigo</span>
            <span className="rmdb-actor-character">Rockwell's Assistant</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img src="./images/no_image.jpg" alt="" />
            <span className="rmdb-actor-name">Barry Calvert</span>
            <span className="rmdb-actor-character">70s G.U.N. Soldier</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img
              src="http://image.tmdb.org/t/p/w154//610WzE4EjTcAZ2vN3LB6GQwIjPP.jpg"
              alt=""
            />
            <span className="rmdb-actor-name">Brendan Murphy</span>
            <span className="rmdb-actor-character">Robotnik Proxy</span>
          </div>
        </div>
        <div className="rmdb-grid-element">
          <div className="rmdb-actor">
            <img src="./images/no_image.jpg" alt="" />
            <span className="rmdb-actor-name">Toru Nakahara</span>
            <span className="rmdb-actor-character">Japanese News Reporter</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsActor;
