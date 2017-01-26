var path = require('path');
var express = require('express');
var app = express();
var loggerRouter = require('./router/logger');

app.use(express.static('public'));

app.use('api/logger', loggerRouter);


app.use(errorHandler);

function errorHandler(err, req, res, next) {
    console.log(err.message);
}

app.use(function (req, res, next) {
    res.redirect('/');
});
// app.get('*', function(req, res) {
//     res.sendfile('public/index.html');
// });

app.listen(3006, function() {
    console.log('start listening');
});
