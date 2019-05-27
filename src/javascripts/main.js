import firebase from 'firebase/app';
import auth from './components/auth/auth';
import apiKeys from './helpers/apiKeys.json';
import navBar from './helpers/data/authData';
import navBarEvent from './components/myNavBar/navBarEvents';
import '../styles/main.scss';
import 'bootstrap';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  navBarEvent.navBarEvents();
  navBar.checkLoginStatus();
  auth.authDomStringBuilder();
};

init();
