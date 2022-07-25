const passport = require('passport')
const jwt = require('jsonwebtoken');

const verifyCallBack = (req, res, resolve, reject) => {
    return (err, user, info) => {

        if (err || !user) {
            return reject({
                message: 'Something is not right',
                user
            });
        }
        req.login(user, { session: false }, (err) => {
            if (err) {
                return reject(err);
            }
            const token = jwt.sign(user, 'your_jwt_secret');
            user.token = token
            res.locals.data = { user, token }
            resolve()
        });

    }
}

//  adding part of  user  right checking 
const authLocalLogin = (req, res, next) => {
    return new Promise((resolve, reject) => {
        passport.authenticate('local-login', { session: false }, verifyCallBack(req, res, resolve, reject))(req, res, next);
    }).then(() => next())
        .catch((err) => new Error(err));
}


const authJwtStrategy = async (req, res, next) => {
    try {
        await passport.authenticate('local-jwt', { session: false })(req, res, next);
        return next()
    } catch (err) {
        return new Error(err)
    }
}
//  here i m not using the callback to make jwt
// const authLocalLogin = async (req, res, next) => {
//     try {
//         await passport.authenticate('local-login', { session: false })(req, res, next);
//         return next();
//     } catch (error) { return new Error(error) }
// }


module.exports = {
    authLocalLogin, authJwtStrategy
}