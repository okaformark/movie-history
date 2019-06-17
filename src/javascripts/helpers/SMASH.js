const myUserMovie = (userMovies, movies) => movies.map((movie) => {
  const eachMovie = movie;
  // console.error('usermovie', userMovies);
  // console.error('movie', movies);
  const movieWatchlist = userMovies.find(userMovie => userMovie.movieId === eachMovie.id);
  return movieWatchlist;
});

export default { myUserMovie };
