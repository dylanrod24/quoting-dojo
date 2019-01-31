const mongoose = require('mongoose');
// Quote = mongoose.model('Quote');


var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true},
    quote: {type: String, required: true}
}, {timestamps: true});
mongoose.model('Quote', QuoteSchema); // I am setting this Schema in my models as 'Quote'
// var Quote = mongoose.model('Quote') // I am retrieving this Schema from Models with the name 'Quote'