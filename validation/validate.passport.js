const bcrypt = require('bcrypt');

const validateBcryptDb = async (user, password, cb) => {
    //comparing the hashed stored password  and the  inserted password
    try {
        if (!user.email) return cb(null, false, { message: 'Incorrect email or password' })

        result = await bcrypt.compare(password, user.password);
        if (!result) return cb(null, false, { message: 'Incorrect email or password' })
        return cb(null, user);

    } catch (err) {
        return cb(err)
    }
    // bcrypt.compare(password, user.password, (err, res) => {
    //     if (err) return cb(err);

    //     if (res === false) {
    //         return cb(null, false, { message: 'Incorrect email or password' });
    //     } else {

    //     }
    // });
}


module.exports = { validateBcryptDb }