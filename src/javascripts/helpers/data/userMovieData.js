import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getUserMovieByUserId = userId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/userMovie.json?orderBy="userId"&equalTo="${userId}"`)
    .then((results) => {
      const userMovieResult = results.data;
      const userMovies = [];
      Object.keys(userMovieResult).forEach((userMovieId) => {
        userMovieResult[userMovieId].id = userMovieId;
        userMovies.push(userMovieResult[userMovieId]);
      });
      // console.error(userMovies);
      resolve(userMovies);
    })
    .catch(err => reject(err));
});
const editUserMovie = (watchlistId, userWatchlistObj) => axios.put(`${firebaseUrl}/userMovie/${watchlistId}.json`, userWatchlistObj);
const editUserMovieByRating = (watchlistId, userWatchlistObj) => axios.put(`${firebaseUrl}/userMovie/${watchlistId}.json`, userWatchlistObj);
const addUserMovie = userWatchlist => axios.post(`${firebaseUrl}/userMovie.json`, userWatchlist);

export default {
  getUserMovieByUserId,
  editUserMovie,
  addUserMovie,
  editUserMovieByRating,
};
