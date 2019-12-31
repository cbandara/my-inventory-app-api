var createError = require('http-errors');
var express = require('express');
var passport = require('passport')
var logger = require('morgan');
var mongoose = require('mongoose');
require('dotenv').config();

var productsRouter = require('./routes/products');
var usersRouter = require('./routes/users');
const authRouter = require('./controllers/auth/router')
const { localStrategy, jwtStrategy } = require('./controllers/auth/strategies');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

passport.use(localStrategy);
passport.use(jwtStrategy);

app.use('/products', productsRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
