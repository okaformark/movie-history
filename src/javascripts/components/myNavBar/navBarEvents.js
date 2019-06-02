import firebase from 'firebase/app';
import 'firebase/auth';
import movies from '../movies/movies';

const navBarEvents = () => {
  const navLinks = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].addEventListener('click', (e) => {
      if (e.target.id === 'navbar-button-logout') {
        firebase.auth().signOut();
      }
    });
  }
};
const createMovieForm = () => {
  document.getElementById('movie-div').classList.add('hide');
  movies.addMovieFormDomStringBuilder();
};

const addMovieEvent = () => {
  document.getElementById('addMovieBtn').addEventListener('click', createMovieForm);
};

export default { navBarEvents, addMovieEvent };
