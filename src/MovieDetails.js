import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { API } from './global';


export function MovieDetails() {
    const { id } = useParams(); /* extract the id value in url */


    //single movie state are stored 
    const [movie, setMovie] = useState([]);

    //fetches movies from mock api and set movieList state
    useEffect(() => {
        fetch(`${API}/movie/${id}`)
            .then(data => data.json())
            .then(data => setMovie(data));
    }, [id]);

    const navigate = useNavigate();

    return (
        <div>
            <iframe width="100%" height="450" src={movie.trailer} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h1>{movie.title}</h1>
            <p>{movie.descript}</p>
            <Button onClick={() => navigate(-1)} variant="outlined">Back</Button>
        </div>
    );
}
