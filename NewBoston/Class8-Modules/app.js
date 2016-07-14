// Importing
var movies = require('./movies');
// The syntax stands for the file in
// the directory that we should look for

movies.avatar();
// This gives us a similar idea of public and private
// in node!


var moviesTuned = require('./moviesTuned');
moviesTuned.printAvatar();
