import './MovieList.css';
import { useState, useEffect } from 'react';
import { useNavigate, } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

import { API } from './global';
import DeleteIcon from '@mui/icons-material/Delete';
import { MovieContainer } from './MovieContainer';

//maps each movie in movies prob to MovieContainer 
export function MovieList() {

  //movies state are stored 
  const [movieList, setMovieList] = useState([]);
  const getData = () => {
    fetch(`${API}/movie`)
      .then(data => data.json())
      .then(data => setMovieList(data));
    // console.log("useEff");
  }
  //fetches movies from mock api and set movieList state
  useEffect(getData, []);

  const deleteMovie = (id) => {
    console.log(`${id} deleted`);
    fetch(`${API}/movie/${id}`, { method: "DELETE" })
      .then(getData);
  };
  const navigate = useNavigate();

  return (
    <div className='main-container'>
      {/* maps each movie from MovieList to MovieContainer */}
      {movieList.map(movie =>
        <MovieContainer
          key={movie.id}
          movie={movie}
          id={movie.id}
          deleteBtn={
            <IconButton color="error"
              style={{ marginLeft: "auto" }}
              onClick={() => deleteMovie(movie.id)}>
              <DeleteIcon />
            </IconButton>
          }
          editBtn={
            < IconButton color="primary" onClick={() => navigate(`/movie/edit/${movie.id}`)}>
              <EditIcon />
            </IconButton >
          }
        />
      )}
    </div >
  );
}


