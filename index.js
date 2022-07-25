const httpStatus = require('http-status');
const app = require('./app');
const ApiError = require('./utils/ApiError');
const catchAsync = require('./utils/catchAsync');
const passport = require('passport')
const { authRoute } = require("./routes/index.routes")
const { loginLocalStrategy, jwtLoginStrategy } = require("./config/passport.js")
console.log(authRoute)
passport.use("local-login", loginLocalStrategy);
passport.use("local-jwt", jwtLoginStrategy);

app.use("/auth", authRoute);


app.get("/", (req, res) => {
    res.send("hello world!")
})
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