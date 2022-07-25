const httpStatus = require('http-status');
const app = require('./app');
const ApiError = require('./utils/ApiError');
const catchAsync = require('./utils/catchAsync');
// mostly all will be removed and refactored 
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
// app.get('/data', catchAsync(async (req, res) => {







// app.get()


const PORT = process.env.PORT | 3001


app.listen(PORT, () => {
    console.log("server started on port", PORT);
    console.log("mode:", process.env.NODE_ENV);
    console.log("state", process.env.STATE)

})