const httpStatus = require('http-status');
const app = require('./app');
const ApiError = require('./utils/ApiError');
const catchAsync = require('./utils/catchAsync');




app.get('/data', catchAsync(async (req, res) => {

    throw new ApiError(400, 'something wrong');
    res.send("oke");
    // throw new ApiError(httpStatus.BAD_REQUEST,"error");


}))






// app.get()


app.listen(process.env.PORT | 3001, () => {
    console.log("server started on port", process.env.PORT);
    console.log("mode:", process.env.NODE_ENV);
    console.log("state", process.env.STATE)

})