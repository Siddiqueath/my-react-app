import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { API } from './global';


export function EditMovieForm({ movie }) {
    const [title, setTitle] = useState(movie.title);
    const [image, setPoster] = useState(movie.image);
    const [rating, setRating] = useState(movie.rating);
    const [trailer, setTrailer] = useState(movie.trailer);
    const [descript, setDescript] = useState(movie.descript);
    const navigate = useNavigate();

    const updatedMovie = {
        title: title, image: image, rating: rating, trailer: trailer, descript: descript
    };

    const editMovie = () => {
        // setMovieList([...movieList, newMovie]);
        fetch(`${API}/movie/${movie.id}`, {
            method: 'PUT',
            body: JSON.stringify(updatedMovie),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => navigate('/movies'));
    };

    return (
        <div className='add-movie-form'>
            <TextField id="outlined-basic" label="title" variant="outlined" onChange={(event) => setTitle(event.target.value)} value={title} />
            <TextField id="outlined-basic" label="poster" variant="outlined" onChange={(event) => setPoster(event.target.value)} value={image} />
            <TextField id="outlined-basic" label="rating" variant="outlined" onChange={(event) => setRating(event.target.value)} value={rating} />
            <TextField id="outlined-basic" label="trailer" variant="outlined" onChange={(event) => setTrailer(event.target.value)} value={trailer} />
            <TextField id="outlined-basic" label="description" variant="outlined" onChange={(event) => setDescript(event.target.value)} value={descript} />
            <Button onClick={editMovie} variant="contained">Save</Button>
        </div>
    );
}
