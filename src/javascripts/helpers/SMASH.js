const myUserMovie = (userMovies, movies) => movies.map((movie) => {
  const eachMovie = movie;
  const movieWatchlist = userMovies.find(userMovie => userMovie.movieId === eachMovie.id);
  console.error('matchingid', movieWatchlist);
  return movieWatchlist;
});

export default { myUserMovie };
