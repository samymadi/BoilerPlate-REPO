const express = require('express');
const dotEnv = require('./config/config');

const helmet = require('helmet'); //for security (frame cross etc...)
const morgan = require('./config/morgan'); //for logs
const xss = require('xss-clean');
const i18nextMiddleware = require('./config/i18n'); 
const {errorHandler,errorConverter}= require('./middlewares/error');
const compression = require('./middlewares/compressionMiddleware');

const app = express();



//for multiple languages support
app.use(i18nextMiddleware);

//morgan to logs details about triggred endpoints
app.use(morgan.successHandler,morgan.errorHandler);

//For security
app.use(helmet());

// parse json request body
app.use(express.json());


// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));



//sanitize data 
app.use(xss());

app.use(compression);

//to convert and handle Errors
app.use(errorConverter,errorHandler);



module.exports = app;



