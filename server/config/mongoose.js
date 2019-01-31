let path = require('path');
let fs = require('fs');

// Create a variable that points to the models folder
var models_path = path.join(__dirname, './../models');
// Read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file){
    if (file.indexOf('.js') >= 0){
        // Require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
})