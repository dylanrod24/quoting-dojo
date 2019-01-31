var express = require('express');
var app = express();
// Require body-parser to receive post data from clients
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('express-flash');

require('./server/config/mongoose.js');

// For displaying error flash messages
app.use(flash());
// Integrate body-parser with our app
app.use(bodyParser.urlencoded({extended: true}));
var path = require('path');
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
app.use(session({
    secret: 'quote_secret',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))
mongoose.connect('mongodb://localhost/quotes', {useNewUrlParser: true});

require('./server/config/routes.js')(app);

app.listen(2000, function(){
    console.log("running on port 2000");
})