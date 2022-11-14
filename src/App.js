import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import UserBox from './UserBox';
import AddColor from './AddColor';
import { MovieList } from './MovieList';
import { AddMovie } from "./AddMovie";
import { MovieDetails } from "./MovieDetails";
import { EditMovie } from "./EditMovie";
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { API } from './global';
import { BasicForm } from './BasicForm';

export default function App() {

  //single movie state are stored 
  const [movieList, setMovieList] = useState([]);

  //fetches movies from mock api and set movieList state
  useEffect(() => {
    fetch(`${API}/movie`)
      .then(data => data.json())
      .then(data => setMovieList(data))
  }, []);

  const navigate = useNavigate();

  //website theme state is stored
  const [mode, setMode] = useState('light');

  //theme is created and stored
  const theme = createTheme({
    palette: {
      mode: mode
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={4} style={{ minHeight: '100vh' }}>
        <div className='App'>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
              <Button color="inherit" onClick={() => navigate('/movies')}>Movies</Button>
              <Button color="inherit" onClick={() => navigate('/users')}>Users</Button>
              <Button color="inherit" onClick={() => navigate('/colors')}>Color Game</Button>
              <Button color="inherit" onClick={() => navigate('/movies/add')}>Add Movie</Button>
              <Button
                style={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color="inherit"
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              >
                {mode === "dark" ? "light" : "dark"} mode
              </Button>
            </Toolbar>
          </AppBar>

          <div className='routes'>
            <Routes>
              {/* route matches the given path in search bar to the specified component  */}
              <Route path="/" element={<Home />} />
              <Route path="/flims" element={<Navigate replace to='/movies' />} />
              <Route path="/movies" element={<MovieList />} />
              <Route path="/movies/:id" element={<MovieDetails />} />
              <Route path="/movies/add" element={<AddMovie />} />
              <Route path="/colors" element={<AddColor />} />
              <Route path="/users" element={<UserBox />} />
              <Route path="/movie/edit/:id" element={<EditMovie />} />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate replace to='/404' />} />
              <Route path="/form" element={<BasicForm />} />
            </Routes>
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function NotFound() {
  return (
    <div>
      <img
        className='not-found'
        src='https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif'
        alt='404 not found' />
    </div>
  );
}

function Home() {
  return (
    <h1>Welcome!</h1>
  );
}


