import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { API } from './global';
import { EditMovieForm } from "./EditMovieForm";


export function EditMovie() {
    const { id } = useParams(); /* extract the id value in url */


    //single movie state are stored 
    const [movie, setMovie] = useState();

    //fetches movies from mock api and set movieList state
    useEffect(() => {
        fetch(`${API}/movie/${id}`)
            .then(data => data.json())
            .then(data => setMovie(data));
    }, [id]);

    return (
        <>
            {/* technique to print json prettly
           <pre>{JSON.stringify(movie, null, 2)}</pre> */}

            {(movie) ?
                <EditMovieForm movie={movie} /> :
                '...Loading'}
        </>
    );
}
