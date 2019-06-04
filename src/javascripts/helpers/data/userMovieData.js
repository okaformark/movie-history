import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseUrl;

const getUserMovieByUserId = userId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/userMovie.json?orderBy="userId"&equalTo="${userId}"`)
    .then((results) => {
      console.error('results', results);
      const userMovieResult = results.data;
      // console.error(userMovieResult);
      const userMovies = [];
      Object.keys(userMovieResult).forEach((userMovieId) => {
        userMovieResult[userMovieId].id = userMovieId;
        userMovies.push(userMovieResult[userMovieId]);
      });
      resolve(userMovies);
    })
    .catch(err => reject(err));
});
const editUserMovie = (watchlistId, userWatchlistObj) => axios.put(`${firebaseUrl}/userMovies/${watchlistId}.json`, userWatchlistObj);
const addUserMovie = userWatchlist => axios.post(`${firebaseUrl}/userMovies.json`, userWatchlist);

export default { getUserMovieByUserId, editUserMovie, addUserMovie };
