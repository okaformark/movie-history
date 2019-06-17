const myUserMovie = (userMovies, movies) => movies.map((movie) => {
  const eachMovie = movie;
  const movieWatchlist = userMovies.find(userMovie => userMovie.movieId === eachMovie.id);
  if (movieWatchlist) {
    eachMovie.id = movieWatchlist.movieId;
    eachMovie.rating = movieWatchlist.rating;
    eachMovie.isWatched = movieWatchlist.isWatched;
  }
  return eachMovie;
});

export default { myUserMovie };
