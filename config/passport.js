const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const passportJWT = require("passport-jwt");
const { verifyStrategyLoginCb, verifyStrategyJwtCb } = require("../utils/strategyVerify.js");

const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

const jwtLoginStrategy = new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'your_jwt_secret'
}, verifyStrategyJwtCb)


// const cryptPassword = (user, password) => {
//     bcrypt.genSalt(10, function (err, salt) {
//         if (err) return next(err);
//         bcrypt.hash(password, salt, function (err, hash) {
//             if (err) return next(err);
//             console.log(hash)
//             user.password = hash; // Or however suits your setup
//             // Store the user to the database, then send the response
//         });
//     });

// }

const loginLocalStrategy = new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    }, verifyStrategyLoginCb)

module.exports = {
    loginLocalStrategy, jwtLoginStrategy
}



