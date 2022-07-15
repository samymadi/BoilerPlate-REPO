const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const logger = require('logger');



//convert all others error to ApiError
const errorConverter =(err,req,res,next)=>{

    let error = err;

     if(!(error instanceof ApiError)){
       const statusCode  = httpStatus.INTERNAL_SERVER_ERROR;
       const message = error.message | httpStatus[statusCode];
       error = new ApiError(statusCode,message,false,err.stack);
    }

    next(error);
}



const errorHandler = (err,req,res,next)=>{

    let { statusCode, message } = err;

    //change to config
  if ('env'==='production' && !err.isOperational) {

    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    //change to config
    ...("env" === 'development' && { stack: err.stack }),
  };


  //chnage to config
  if ("env" === 'development') {
    logger.error(err);
  }

  res.status(statusCode).send(response);
};




module.exports = {
    errorConverter,
    errorHandler
}