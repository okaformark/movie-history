import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

const movieDomStringBuilder = () => {
  let domString = '<div class="container d-flex">';
  domString += '<div class="row">';
  moviesData.getMovies().then((movieResp) => {
    console.error(movieResp);
    movieResp.forEach((movie) => {
      domString += '<div class= "card border-danger mb-2 m-2 col-3">';
      domString += `<h2 class="card-header">${movie.Title}</h2>`;
      domString += `<img src=${movie.imageUrl} height="300"/>`;
      domString += '<div>';
      domString += '<input type="radio" class= "addMovie" name="selection">';
      domString += '<label for="Add-movie">Add to WatchList</label>';
      domString += '</div>';
      domString += '<div>';
      domString += '<input type="radio" class= "removeMovie" name="selection">';
      domString += '<label for="remove-movie">Remove from WatchList</label>';
      domString += '</div>';
      domString += `<h6>${movie.movieRating}</h6>`;
      domString += '</div>';
    });
    domString += '</div>';
    domString += '</div>';
    domString += '<button class="btn btn-danger"id="submit" type="submit" value="Submit">Submit</button>';
    util.printToDom('movie-div', domString);
  }).catch(err => console.error('could not get movie', err));
};

export default { movieDomStringBuilder };
