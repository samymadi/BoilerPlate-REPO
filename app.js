const express = require('express');
const dotEnv = require('./config/config');


//remove
const catchAsync = require('./utils/catchAsync');
const ApiError = require('./utils/ApiError');
const httpStatus = require('http-status');

const cors = require('cors'); 
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


// enable cors
app.use(cors());
app.options('*', cors());


app.get('/data',catchAsync(async(req,res)=>{

    throw new ApiError(httpStatus.BAD_REQUEST,"error try this");
    res.json("oke");

    
}))



// // send back a 404 error for any unknown api request
// app.use((req, res, next) => {
//     throw new ApiError(httpStatus.NOT_FOUND, 'Not found');
// });

//to convert and handle Errors
app.use(errorConverter,errorHandler);



module.exports = app;



