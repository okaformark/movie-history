import firebase from 'firebase/app';
import 'firebase/auth';
import moviesData from '../../helpers/data/moviesData';
import userMovieData from '../../helpers/data/userMovieData';
import SMASH from '../../helpers/SMASH';
import util from '../../helpers/util';

const addToWatchList = (e) => {
  const watchlistId = e.target.id.split('.')[1];
  const userWatchList = {
    userId: firebase.auth().currentUser.uid,
    movieId: e.target.id.split('.')[1],
    isWatched: e.target.value,
    rating: '',
  };
  if (watchlistId) {
    userMovieData.editUserMovie(watchlistId, userWatchList)
      .then(() => getUserMovie(firebase.auth().currentUser.uid)) // eslint-disable-line no-use-before-define
      .catch(err => console.error('couldnt add to userMovie', err));
  } else {
    userMovieData.addUserMovie(userWatchList)
      .then(() => getUserMovie(firebase.auth().currentUser.uid)) // eslint-disable-line no-use-before-define
      .catch(err => console.error('usermovie error', err));
  }
};

const addToWatchListByRating = (e) => {
  const ratingId = e.target.id.split('.')[1];
  console.error(ratingId);
  const userRatingWatchList = {
    userId: firebase.auth().currentUser.uid,
    movieId: e.target.id.split('.')[1],
    isWatched: 'true',
    rating: e.target.value,
  };
  // console.error(userRatingWatchList);
  if (ratingId) {
    userMovieData.editUserMovieByRating(ratingId, userRatingWatchList)
      .then(() => getUserMovie(firebase.auth().currentUser.uid)) // eslint-disable-line no-use-before-define
      .catch(err => console.error('couldnt add to userMovie', err));
  } else {
    userMovieData.addUserMovie(userRatingWatchList)
      .then(() => getUserMovie(firebase.auth().currentUser.uid)) // eslint-disable-line no-use-before-define
      .catch(err => console.error('usermovie error', err));
  }
};

const watchListDomStringBuilder = (finalMovieCollection) => {
  let domString = '<div class="container d-flex hide">';
  domString += '<div class="row" >';
  finalMovieCollection.forEach((one) => {
    domString += '<div class= "card border-danger mb-2 m-2 col-3">';
    domString += `<h4 class="card-header">${one.Title}</h4>`;
    domString += `<img class="card-img-top" src=${one.imageUrl} height="300"/>`;
    domString += '<div>';
    domString += '<input type="radio" class= "removeMovie" name="selection">';
    domString += '<label for="remove-movie">Remove from WatchList</label>';
    domString += '</div>';
    domString += `<h6>${one.movieRating}</h6>`;
  });
  util.printToDom('movie-watchlist', domString);
};

const addEvents = () => {
  const radioBtn = document.getElementsByClassName('addMovie');
  for (let i = 0; i < radioBtn.length; i += 1) {
    radioBtn[i].addEventListener('click', addToWatchList);
  }
  const ratingBtn = document.getElementsByName('rating');
  for (let j = 0; j < ratingBtn.length; j += 1) {
    ratingBtn[j].addEventListener('click', addToWatchListByRating);
  }
};
// document.getElementById('navbar-button-movieHistory').addEventListener('click', watchListDomStringBuilder);

const movieDomStringBuilder = () => {
  let domString = '<div class="container d-flex hide">';
  domString += '<div class="row" >';
  moviesData.getMovies().then((movieResp) => {
    movieResp.forEach((movie) => {
      domString += '<div class= "card border-danger mb-2 m-2 col-3">';
      domString += `<h4 class="card-header">${movie.Title}</h4>`;
      domString += `<img class="card-img-top" src=${movie.imageUrl} height="300"/>`;
      domString += `<div id = ${movie.id}>`;
      domString += `<input id="radio.${movie.id}" type="radio" class= "addMovie" name="selection" value="false">`;
      domString += `<label for="radio.${movie.id}">Add to WatchList</label>`;
      domString += '</div>';
      domString += `<div id= ${movie.id}>`;
      domString += '<input type="radio" class= "removeMovie" name="selection">';
      domString += '<label for="remove-movie">Remove from WatchList</label>';
      domString += '</div>';
      domString += `<h6>${movie.movieRating}</h6>`;
      domString += `<fieldset id="stars.${movie.id}" class="rating">`;
      domString += `<input type="radio" id="star5.${movie.id}" name="rating" value="5" /><label class = "full" for="star5.${movie.id}" title="Awesome - 5 stars"></label>`;
      domString += `<input type="radio" id="star4half.${movie.id}" name="rating" value="4 and a half" /><label class="half" for="star4half.${movie.id}" title="Pretty good - 4.5 stars"></label>`;
      domString += `<input type="radio" id="star4.${movie.id}" name="rating" value="4" /><label class = "full" for="star4.${movie.id}" title="Pretty good - 4 stars"></label>`;
      domString += `<input type="radio" id="star3half.${movie.id}" name="rating" value="3 and a half" /><label class="half" for="star3half.${movie.id}" title="Meh - 3.5 stars"></label>`;
      domString += `<input type="radio" id="star3.${movie.id}" name="rating" value="3" /><label class = "full" for="star3.${movie.id}" title="Meh - 3 stars"></label>`;
      domString += `<input type="radio" id="star2half.${movie.id}" name="rating" value="2 and a half" /><label class="half" for="star2half.${movie.id}" title="Kinda bad - 2.5 stars"></label>`;
      domString += `<input type="radio" id="star2.${movie.id}" name="rating" value="2" /><label class = "full" for="star2.${movie.id}" title="Kinda bad - 2 stars"></label>`;
      domString += `<input type="radio" id="star1half.${movie.id}" name="rating" value="1 and a half" /><label class="half" for="star1half.${movie.id}" title="Meh - 1.5 stars"></label>`;
      domString += `<input type="radio" id="star1.${movie.id}" name="rating" value="1" /><label class = "full" for="star1.${movie.id}" title="Sucks big time - 1 star"></label>`;
      domString += `<input type="radio" id="starhalf.${movie.id}" name="rating" value="half" /><label class="half" for="starhalf.${movie.id}" title="Sucks big time - 0.5 stars"></label>`;
      domString += '</fieldset>';
      domString += '</div>';
    });
    domString += '</div>';
    domString += '</div>';
    util.printToDom('movie-div', domString);
    addEvents();
  }).catch(err => console.error('could not get movie', err));
};

const submitMovie = (e) => {
  e.preventDefault();
  const newMovie = {
    Title: document.getElementById('Movie-Title').value,
    imageUrl: document.getElementById('Movie-url').value,
    movieRating: document.getElementById('Movie-rating').value,
    uid: firebase.auth().currentUser.uid,
  };
  moviesData.addNewMovie(newMovie)
    .then(() => {
      document.getElementById('movie-form').classList.add('hide');
      document.getElementById('Movie-Title').value = '';
      document.getElementById('Movie-url').value = '';
      document.getElementById('Movie-rating').value = '';
      // getMovies(firebase.auth().currentUser.uid); // eslint-disable-line no-use-before-define
    })
    .catch(err => console.error('could not add movie', err));
  movieDomStringBuilder();
};

const addMovieFormDomStringBuilder = () => {
  let domString = '';
  domString += '<form class="col-6 offset-3">';
  domString += '<div class="inputWithIcon form-group">';
  domString += '<label for="Movie-Title">Movie Title:</label>';
  domString += '<input id="Movie-Title" type="text" class="form-control" placeholder="Godzilla">';
  domString += '<i class="fa fa-film fa-lg fa-fw" aria-hidden="true"></i>';
  domString += '</div>';
  domString += '<div class="inputWithIcon form-group">';
  domString += '<label for="Movie-url">Movie Url:</label>';
  domString += '<input id="Movie-url" type="url" class="form-control" placeholder="https://example.com" size="30" >';
  domString += '<i class="fa fa-photo fa-lg fa-fw" aria-hidden="true"></i>';
  domString += '</div>';
  domString += '<div class="inputWithIcon form-group">';
  domString += '<label for="Movie-rating">Movie ratings:</label>';
  domString += '<input id="Movie-rating" type="text" class="form-control" placeholder="Example...PG-13, Rated R, etc">';
  domString += '<i class="fa fa-star-half-full fa-lg fa-fw" aria-hidden="true"></i>';
  domString += '</div>';
  domString += '<button type="submit" id="addNewMovie" class="btn btn-outline-primary">Submit</button>';
  domString += '</form>';
  util.printToDom('movie-form', domString);
  document.getElementById('addNewMovie').addEventListener('click', submitMovie);
};


const getUserMovie = (userId) => {
  userMovieData.getUserMovieByUserId(userId)
    .then((userMovie) => {
      // console.error(userMovie);
      moviesData.getMovies(userId).then((movies) => {
        // console.error(movies);
        const finalMovieCollection = SMASH.myUserMovie(userMovie, movies);
        watchListDomStringBuilder(finalMovieCollection);
      });
    })
    .catch(err => console.error(err));
};

export default { movieDomStringBuilder, addMovieFormDomStringBuilder };
