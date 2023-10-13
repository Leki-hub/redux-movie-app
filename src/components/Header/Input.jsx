import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows  } from '../../features/movies/movieSlice';

// functional component to get user input and dispatch actions
const UserInputForm = () => {
  const dispatch = useDispatch();
  const [movieText, setMovieText] = useState(''); // State for movie input
  const [seriesText, setSeriesText] = useState(''); // State for series input

  // Handler for movie input change
  const handleMovieInputChange = (e) => {
    setMovieText(e.target.value);
  };

  // Handler for series input change
  const handleSeriesInputChange = (e) => {
    setSeriesText(e.target.value);
  };

  // Handler for movie search form submission
  const handleMovieSearch = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(movieText)); // Dispatch action with user input
  };

  // Handler for series search form submission
  const handleSeriesSearch = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncShows(seriesText)); // Dispatch action with user input
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search Movies"
          value={movieText}
          onChange={handleMovieInputChange}
        />
        <button type="submit" onClick={handleMovieSearch}>Search</button>
      </form>

      <form>
        <input
          type="text"
          placeholder="Search Series"
          value={seriesText}
          onChange={handleSeriesInputChange}
        />
        <button type="submit" onClick={handleSeriesSearch}>Search</button>
      </form>
    </div>
  );
};

export default UserInputForm;
