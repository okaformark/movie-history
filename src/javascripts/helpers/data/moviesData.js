import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const addNewMovie = movie => axios.post(`${firebaseUrl}/movies.json`, movie);

const deleteMovies = deleteMoviesId => axios.delete(`${firebaseUrl}/movies/${deleteMoviesId}.json`);

const getMovies = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies.json`)
    .then((results) => {
      const movieResult = results.data;
      const movies = [];
      Object.keys(movieResult).forEach((movieId) => {
        movieResult[movieId].id = movieId;
        movies.push(movieResult[movieId]);
      });
      // console.error(movies);
      resolve(movies);
    })
    .catch(err => reject(err));
});

export default { getMovies, addNewMovie, deleteMovies };
