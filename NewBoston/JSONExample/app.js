var fs = require('fs');
var obj;

// fs.readFile('videodata', 'utf8', function(err, data) {
//     if(err) {
//         throw err;
//     }

//     obj = require('./videodata.json'); 
  
// });

var json = require('./videodata.json');

// This is the way of parsing through a json
// with a "foreach" like loop
for(var category in json.categories) {
    // if(err) throw err;
    console.log(json.categories[category].categoryID);
}
