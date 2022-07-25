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
                console.log("im here 3")
                return reject(err);
            }
            const token = jwt.sign(user, 'your_jwt_secret');
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
module.exports = {
    authLocalLogin
}