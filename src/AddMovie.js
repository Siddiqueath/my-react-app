import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { API } from './global';
import { useFormik } from "formik";
import * as yup from 'yup';

const formValidationSchema = yup.object({
    title: yup.string().required(),
    image: yup.string().required(),
    rating: yup.number().required('rating must be an number').min(0).max(10),
    trailer: yup.string().required(),
    descript: yup.string().required().min(10),
});

export function AddMovie() {
    const { handleChange, handleBlur, handleSubmit, values, errors, touched } = useFormik({
        initialValues: { title: '', image: '', rating: '', trailer: '', descript: '' },
        validationSchema: formValidationSchema,
        onSubmit: (values) => {
            console.log(values);
            addMovie(values);
        },
    });

    const navigate = useNavigate();
    const addMovie = (newMovie) => {
        //     const newMovie = {
        //         title: title,
        //         image: image,
        //         rating: rating,
        //         trailer: trailer,
        //         descript: descript
        //     };
        // setMovieList([...movieList, newMovie]);
        fetch(`${API}/movie`, {
            method: 'POST',
            body: JSON.stringify(newMovie),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => navigate('/movies'));
    };
    return (
        <form onSubmit={handleSubmit} onChange={handleChange} className='add-movie-form'>
            <TextField
                name='title'
                id="outlined-basic"
                label="title"
                variant="outlined"
                values={values.title}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.title && touched.title}
                helperText={errors.title && touched.title ? errors.title : ''}
            />


            <TextField
                name='image'
                id="outlined-basic"
                label="poster"
                variant="outlined"
                values={values.image}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.image && touched.image}
                helperText={errors.image && touched.image ? errors.image : ''}
            />


            <TextField
                name='rating'
                id="outlined-basic"
                label="rating"
                variant="outlined"
                values={values.rating}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.rating && touched.rating}
                helperText={errors.rating && touched.rating ? errors.rating : ''}
            />

            <TextField
                name='trailer'
                id="outlined-basic"
                label="trailer"
                variant="outlined"
                values={values.trailer}
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.trailer && touched.trailer}
                helperText={errors.trailer && touched.trailer ? errors.trailer : ''}
            />

            <TextField
                name='descript'
                id="outlined-basic"
                label="description"
                variant="outlined"
                values={values.descript}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.descript && touched.descript}
                helperText={errors.descript && touched.descript ? errors.descript : ''}
            />

            <Button type='submit' variant="contained">Add Movie</Button>

            values
            <pre>{JSON.stringify(values)}</pre>
            errors
            <pre>{JSON.stringify(errors)}</pre>
            touched
            <pre>{JSON.stringify(touched)}</pre>

        </form>
    );
}
