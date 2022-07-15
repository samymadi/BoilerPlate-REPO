const express = require('express');
const helmet = require('helmet'); //for security (frame cross etc...)
const morgan = require('./config/morgan'); //for logs 


const app = express();



//morgan to logs details about triggred endpoints
app.use(morgan.successHandler,morgan.errorHandler);

//For security
app.use(helmet);

// parse json request body
app.use(express.json());



// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));



module.exports = app;



