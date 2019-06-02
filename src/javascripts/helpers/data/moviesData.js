import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

// const addNewMovie = movie => axios.post(`${firebaseUrl}/movies.json`, movie);

const getMovies = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movies.json`)
    .then((results) => {
      const movieResult = results.data;
      const movieObject = Object.values(movieResult);
      const movieArray = Array.from(movieObject);
      // console.error(movieArray);
      resolve(movieArray);
    })
    .catch(err => reject(err));
});

export default { getMovies };
