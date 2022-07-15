const morgan = require('morgan');
const logger = require('./logger');




const MAX_STATUS_CODE_SUCCESS=400;

//create new Token attribute named (:message) 
//get error from res.locals
morgan.token('message',(req,res)=> res.locals.errorMessage || '');



const getIPFormat = ()=> (':remote-addr - ');

//example (attribute format  => :name_attribute)
const successResponseFormat =`${getIPFormat()}:method :url :status - :response-time ms`
const errorResponseFormat = `${getIPFormat()}:method :url :status - :response-time ms - message: :message`


//to check later the value 300
//stream to save logs

const successHandler = morgan(successResponseFormat,{
    skip :(req,res)=>res.statusCode >=MAX_STATUS_CODE_SUCCESS,
    stream: {write:(message)=>logger.info(message.trim())}
})


const errorHandler = morgan(errorResponseFormat,{
    skip :(req,res)=>res.statusCode < MAX_STATUS_CODE_SUCCESS,
    stream: {write:(message)=>logger.error(message.trim())}
})



module.exports ={
    errorHandler,
    successHandler
}


