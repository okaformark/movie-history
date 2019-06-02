import moviesData from '../../helpers/data/moviesData';
import util from '../../helpers/util';

const movieDomStringBuilder = () => {
  let domString = '<div class="container d-flex hide">';
  domString += '<div class="row" >';
  moviesData.getMovies().then((movieResp) => {
    console.error(movieResp);
    movieResp.forEach((movie) => {
      domString += '<div class= "card border-danger mb-2 m-2 col-3">';
      domString += `<h4 class="card-header">${movie.Title}</h4>`;
      domString += `<img class="card-img-top" src=${movie.imageUrl} height="300"/>`;
      domString += '<div>';
      domString += '<input type="radio" class= "addMovie" name="selection">';
      domString += '<label for="Add-movie">Add to WatchList</label>';
      domString += '</div>';
      domString += '<div>';
      domString += '<input type="radio" class= "removeMovie" name="selection">';
      domString += '<label for="remove-movie">Remove from WatchList</label>';
      domString += '</div>';
      domString += `<h6>${movie.movieRating}</h6>`;
      domString += '<fieldset class="rating">';
      domString += '<input type="radio" id="star5" name="rating" value="5" /><label class = "full" for="star5" title="Awesome - 5 stars"></label>';
      domString += '<input type="radio" id="star4half" name="rating" value="4 and a half" /><label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>';
      domString += '<input type="radio" id="star4" name="rating" value="4" /><label class = "full" for="star4" title="Pretty good - 4 stars"></label>';
      domString += '<input type="radio" id="star3half" name="rating" value="3 and a half" /><label class="half" for="star3half" title="Meh - 3.5 stars"></label>';
      domString += '<input type="radio" id="star3" name="rating" value="3" /><label class = "full" for="star3" title="Meh - 3 stars"></label>';
      domString += '<input type="radio" id="star2half" name="rating" value="2 and a half" /><label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>';
      domString += '<input type="radio" id="star2" name="rating" value="2" /><label class = "full" for="star2" title="Kinda bad - 2 stars"></label>';
      domString += '<input type="radio" id="star1half" name="rating" value="1 and a half" /><label class="half" for="star1half" title="Meh - 1.5 stars"></label>';
      domString += '<input type="radio" id="star1" name="rating" value="1" /><label class = "full" for="star1" title="Sucks big time - 1 star"></label>';
      domString += '<input type="radio" id="starhalf" name="rating" value="half" /><label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>';
      domString += '</fieldset>';
      domString += '</div>';
    });
    domString += '</div>';
    domString += '</div>';
    util.printToDom('movie-div', domString);
  }).catch(err => console.error('could not get movie', err));
};

const addMovieFormDomStringBuilder = () => {
  let domString = '';
  domString += '<form class="col-6 offset-3">';
  domString += '<div class="inputWithIcon form-group">';
  domString += '<label for="Movie-Title">Movie Title</label>';
  domString += '<input id="Movie-Title" type="text" class="form-control" placeholder="Godzilla">';
  domString += '<i class="fa fa-film fa-lg fa-fw" aria-hidden="true"></i>';
  domString += '</div>';
  domString += '<div class="inputWithIcon form-group">';
  domString += '<label for="Movie-url">Movie Url</label>';
  domString += '<input id="Movie-url" type="url" class="form-control" placeholder="https://example.com" pattern="https://example.com" size="30" required>';
  domString += '<i class="fa fa-photo fa-lg fa-fw" aria-hidden="true"></i>';
  domString += '</div>';
  domString += '<div class="inputWithIcon form-group">';
  domString += '<label for="Movie-rating">Movie ratings</label>';
  domString += '<input id="Movie-rating" type="text" class="form-control" placeholder="Example...PG-13, Rated R, etc">';
  domString += '<i class="fa fa-star-half-full fa-lg fa-fw" aria-hidden="true"></i>';
  domString += '</div>';
  domString += '<button type="submit" id="addNewMovie" class="btn btn-primary">Submit</button>';
  domString += '</form>';
  util.printToDom('movie-form', domString);
};

// const submitMovieButton = () => {
//   document.getElementById('Movie-Title').value = '';
//   document.getElementById('Movie-url').value = '';
//   document.getElementById('Movie-rating').value = '';
//   document.getElementById('addNewMovie').addEventListener('click', (e) => {
//     e.preventDefault();
//     const newMovie = {
//       Title: document.getElementById('Movie-Title').value,
//       imageUrl: document.getElementById('Movie-url').value,
//       movieRating: document.getElementById('Movie-rating').value,
//     };
//   });
// };

export default { movieDomStringBuilder, addMovieFormDomStringBuilder };
