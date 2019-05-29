import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

const movieDomStringBuilder = () => {
  let domString = '<div class="card-groups row">';
  moviesData.getMovies().then((movieResp) => {
    console.error(movieResp);
    movieResp.forEach((movie) => {
      domString += '<div class= " card mb-2 col-3">';
      domString += `<h2>${movie.Title}</h2>`;
      domString += `<img src=${movie.imageUrl} width="400" height="300"/>`;
      domString += `<h6>${movie.movieRating}</h6>`;
      domString += '</div>';
      domString += '</div>';
    });
    util.printToDom('movie-div', domString);
  }).catch(err => console.error('could not get movie', err));
};

export default { movieDomStringBuilder };
