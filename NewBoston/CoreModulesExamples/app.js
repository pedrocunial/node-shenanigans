var fs = require('fs');

fs.writeFileSync("corn.txt", "Corn is fking disgusting d00d");
console.log(fs.readFileSync("corn.txt").toString());


var path         = require('path');
var websiteHome  = "Desktop/Bucky//thenewboston/index.html";
var websiteAbout = "Desktop/Bucky/thenewboston/about.html";

console.log(path.normalize(websiteHome));
