const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, function verify(email, password, cb) {
    const dbSearch = (email) => {
        return new Promise((resolve, reject) => {
            // doing database search if user return it is resolved else it's rejected 
            // database injection     
            let user = { email, hachedpassword }
            if (user) {
                resolve(user)
            } else {
                reject(new Error("there is an error "))
            }
        })
        // trying with . then directly when testing with parametere 
    }

    return dbSearch(email)
        .then(user => {
            if (!user.username) return cb(null, false, { message: 'Incorrect email or password' })
            //crypting the inserted password
            bcrypt.compare(password, user.password, function (err, res) {
                if (err) return cb(err);
                if (res === false) {
                    return cb(null, false, { message: 'Incorrect email or password' });
                } else {
                    return cb(null, user);
                }
            });
        })
        .catch(err => cb(err))
}));



