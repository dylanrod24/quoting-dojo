const mongoose = require('mongoose');
var quoteController = require('./../controllers/quotes.js');
Quote = mongoose.model('Quote');
module.exports = function(app){
    // Root request
    app.get('/', quoteController.index),
    // Quote page request
    app.get('/quotes', quoteController.quotes),
    // Quote post route
    app.post('/load_quotes', quoteController.create)
}





    