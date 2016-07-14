var movies = require('./moviesFactory');
emilyMovies = movies();
emilyMovies.favMovie = "The notebook";
console.log("Emily's favorite movie is:", emilyMovies.favMovie);
