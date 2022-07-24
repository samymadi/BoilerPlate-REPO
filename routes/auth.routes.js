const express = require('express');
const router = express.Router()

router.post('/login/password', passportAuthenticate)
const verifyCallBack = (req, resolve, reject, user, info) => {
    if (err || !user || !info) {
        return reject({
            message: 'Something is not right',
            user
        });
    }
    req.login(user, { session: false }, (err) => {
        if (err) {
            return reject(err);
        }
        // generate a signed son web token with the contents of user object and return it in the response
        const token = jwt.sign(user, 'your_jwt_secret');
        resolve({ user, token });
    });
}

//  adding part of  user  right checking 
const passportAuthenticate = (req, res, next) => {
    return new Promise((resolve, reject) => {
        passport.authenticate('local', { session: false }, verifyCallBack(req, resolve, reject, user, info))(req, res, next);
    }).then(() => next())
        .catch((err) => next(err));
}
/* POST login. */
router.post('/login', function passportAuthenticate(req, res, next) {

});
exports = router
