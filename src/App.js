import React from 'react';
import './App.css';
import Navbar from './Components/getmovies/NavBar';
import GetMovies from './Components/getmovies';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './Components/getmovies/Details/MovieDetls';

function App() {
  return (
    <div className='main'>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path='/' element={<GetMovies />} />
          <Route path='/movies/:movieId' element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
