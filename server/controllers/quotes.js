const mongoose = require('mongoose');
Quote = mongoose.model('Quote');



module.exports = {
    // Renders index page
    index: function(request, response){
        response.render('index');
    },
    // Renders quote page
    quotes: function(request, response){
        Quote.find({}, function(errors, quotes){
            if (errors){
                console.log(errors);
            }
            response.render('quotes', {Quote: quotes.reverse()});
        })
    },
    // POST quotes and name
    create: function(request, response){
        console.log("POST DATA", request.body);

        // Create a new name and quote corresponding to those from request.body
        var quote = new Quote({name: request.body.name, quote: request.body.quote});
        // Save to the DB and run a callback function with an error (if any)
        quote.save(function(errors){
            if(errors){
                // If there is an error upon saving, use console.log to see what it is in the errors object
                console.log("There's an error:", errors);
                for(var key in errors.errors){
                    request.flash('quote', errors.errors[key].message);
                }
            } else {
                console.log("successfully added")
            
            }
            response.redirect('/quotes');
        })
    }
};