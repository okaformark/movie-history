import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = document.getElementById('auth');
const authNavBar = document.getElementById('navbar-button-auth');
const logOutNavBar = document.getElementById('navbar-button-logout');
const myMovieNavBar = document.getElementById('navbar-button-movieHistory');
const myMovieButton = document.getElementById('myMovieBtn');
const logOutButton = document.getElementById('logOutBtn');
const authButton = document.getElementById('authBtn');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.error(user);
      authDiv.classList.add('hide');
      authNavBar.classList.add('hide');
      myMovieNavBar.classList.remove('hide');
      logOutNavBar.classList.remove('hide');
      myMovieButton.classList.remove('hide');
      logOutButton.classList.remove('hide');
      authButton.classList.add('hide');
    } else {
      authNavBar.classList.remove('hide');
      logOutNavBar.classList.add('hide');
      authDiv.classList.remove('hide');
      myMovieNavBar.classList.add('hide');
      logOutButton.classList.add('hide');
      myMovieButton.classList.add('hide');
      authButton.classList.remove('hide');
    }
  });
};

export default { checkLoginStatus };
