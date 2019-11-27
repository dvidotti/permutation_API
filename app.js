require('dotenv').config();


const express      = require('express');
const logger       = require('morgan');


const app = express();

app.use(logger('dev'));

const index = require('./routes/index');
app.use('/', index);

app.use((req, res, next) => {
  res.status(404).json({message: "No route founded, check your url"});
});


module.exports = app;
