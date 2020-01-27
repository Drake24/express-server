'use strict';
var fs = require('fs');
var path = require('path');

module.exports = function (app) {
  // Loop through folder and include the file
  fs.readdirSync('./routes').forEach(function (file) {
    // Avoid to read this current file.
    if (file === path.basename(__filename)) { return; }
  
    // Load the route file.
    require('./' + file)(app);
  });
};