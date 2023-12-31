import React, { useState } from "react";
import "./style.css";
import { searchMovies } from "../../../utils/utilities";
const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleInput = (event) => {
    setSearchValue(event.target.value);
  };
  const handleSearch = async () => {
    const results = await searchMovies(searchValue);
    setSearchResults(results.results);
  };
  return (
    <div className="Navbar">
      <nav className="nav">
        <div>
          <h1 className="name">MOVIES</h1>
        </div>
        <div className="search">
          <input
            value={searchValue}
            onChange={handleInput}
            type="text"
            placeholder="Search Movie"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="links">
          <li>Home</li>
          <li>About</li>
          <li>Movies List</li>
          <button>SignIn</button>
          <button>LogIn</button>
        </div>
      </nav>
      {searchResults.length > 0 && (
        <div className="search-results">
          {searchResults.map((movie) => (
            <div key={movie.id} className="search-result">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <h3>{movie.date}</h3>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Navbar










