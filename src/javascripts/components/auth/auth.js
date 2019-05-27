import netflixImg from './Netflix.png';
import util from '../../helpers/util';

const authDomStringBuilder = () => {
  let domString = '';
  domString += '<button class = "btn btn-outline-danger">';
  domString += `<img src = ${netflixImg}/>`;
  domString += '</button>';
  util.printToDom('auth', domString);
};

export default { authDomStringBuilder };
