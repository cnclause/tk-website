var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors')
require('dotenv').config()

const stripe = require('./stripe/stripe')


var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.get('/', (req, res) => {
  res.json({
    message: "we are home"
  })
})

app.use('/stripe', stripe)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.status(res.statusCode || 500);
    res.json({
      message: err.message,
      error: err.statusCode
    });
});

module.exports = app;
