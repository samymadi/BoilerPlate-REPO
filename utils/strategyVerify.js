const { validateBcryptDb } = require('../validation/validate.passport');
const { findOneDb, findOneByIdDb } = require("../services/db.services");


const verifyStrategyLoginCb = async (email, password, cb) => {
    try {
        const user = await findOneDb(email, password);
        return validateBcryptDb(user, password, cb);
    } catch (err) {
        return cb(err);
    }
}

const verifyStrategyJwtCb = async (jwtPayload, cb) => {
    try {
        const user = await findOneByIdDb(jwtPayload.id)
        if (user) return cb(null, user)
        return cb(null, false, { message: 'something is incorrect in the token id' })
    } catch (err) {
        return cb(err)
    }
}

module.exports = { verifyStrategyLoginCb, verifyStrategyJwtCb }