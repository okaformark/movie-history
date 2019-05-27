import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = document.getElementById('auth');
const authNavBar = document.getElementById('navbar-button-auth');
const logOutNavBar = document.getElementById('navbar-button-logout');
const myMovieNavBar = document.getElementById('navbar-button-movieHistory');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.error(user);
      authDiv.classList.add('hide');
      authNavBar.classList.add('hide');
      myMovieNavBar.classList.remove('hide');
      logOutNavBar.classList.remove('hide');
    } else {
      authNavBar.classList.remove('hide');
      logOutNavBar.classList.add('hide');
      authDiv.classList.remove('hide');
      myMovieNavBar.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
