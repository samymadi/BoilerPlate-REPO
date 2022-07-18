const httpStatus = require('http-status');
const app = require('./app');
const ApiError = require('./utils/ApiError');
const catchAsync = require('./utils/catchAsync');











// app.get()


const PORT =  process.env.PORT | 3001  


app.listen(PORT ,()=>{
    console.log("server started on port",PORT);
    console.log("mode:",process.env.NODE_ENV);
    console.log("state",process.env.STATE) 

})