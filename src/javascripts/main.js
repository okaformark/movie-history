import firebase from 'firebase/app';
import auth from './components/auth/auth';
import apiKeys from './helpers/apiKeys.json';
import navBar from './helpers/data/authData';
import navBarEvent from './components/myNavBar/navBarEvents';
import moviesData from './helpers/data/moviesData';
import movies from './components/movies/movies';
import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  navBarEvent.navBarEvents();
  navBar.checkLoginStatus();
  auth.authDomStringBuilder();
  moviesData.getMovies();
  navBarEvent.addMovieEvent();
  movies.movieDomStringBuilder();
  // movies.submitForm();
};

init();
