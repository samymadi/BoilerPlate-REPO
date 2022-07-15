const express = require('express');
const helmet = require('helmet'); //for security (frame cross etc...)
const morgan = require('./config/morgan'); //for logs
const i18nextMiddleware = require('./config/i18n'); 


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



module.exports = app;



