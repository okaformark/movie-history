import firebase from 'firebase/app';
import 'firebase/auth';
import netflixImg from './Netflix.png';
import util from '../../helpers/util';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const authDomStringBuilder = () => {
  let domString = '<div class="d-flex justify-content-center">';
  domString += '<button id="google-auth" class="btn btn-outline-danger">';
  domString += `<img src = ${netflixImg} class= "d-flex flex-column"/>Click here to sign in`;
  domString += '</button>';
  domString += '</div>';
  util.printToDom('auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authDomStringBuilder };
