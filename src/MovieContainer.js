import { Counter } from './UserBox';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

//display each movie in a card
export function MovieContainer({ movie, id, deleteBtn, editBtn }) {

    // conditional styling for rating
    const ratStyle = {
        color: movie.rating > 8 ? 'green' : 'red'
    };

    //toggle icon state is stored
    const [butVal, setButVal] = useState(<ExpandMoreIcon />);
    const navigate = useNavigate();

    //summary(description) state is stored
    const [show, setShow] = useState(true);

    //changes "show state" and changes "toggle icon state" based on show state when called
    const toggleDescriptIcon = () => {
        setShow(!show);
        show ? setButVal(<ExpandLessIcon />) : setButVal(<ExpandMoreIcon />);
    };
    //stop
    return (
        <Card className="movie-container">
            <CardMedia
                component="img"
                image={movie.image}
                alt={movie.title} />

            <CardContent className="movie-specs">
                <p>
                    {movie.title}

                    {/* changes the url when info icon is clicked */}
                    <IconButton color="primary" onClick={() => navigate('/movies/' + id)} aria-label="show information">
                        <InfoIcon />
                    </IconButton>

                    {/* calls toggleDescriptIcon function when toggle icon is clicked */}
                    <IconButton
                        color="primary"
                        onClick={toggleDescriptIcon}
                        aria-label="show information">
                        {butVal}
                    </IconButton>
                </p>
                <p style={ratStyle}>⭐ {movie.rating}</p>
            </CardContent>

            {/* displays the movie summary based on show state */}
            {show ? <p className="description">{movie.descript}</p> : ''}

            {/* shows like and dislike buttons */}
            <CardActions>
                <Counter />
                {deleteBtn}
                {editBtn}
            </CardActions>
        </Card>
    );
}
