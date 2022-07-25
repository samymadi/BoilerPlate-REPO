const { validateBcryptDb } = require('../validation/validate.passport');
const { findOneDb } = require("../services/db.services");


verifyStrategyLoginCb = async (email, password, cb) => {
    try {
        const user = await findOneDb(email, password);
        return validateBcryptDb(user, password, cb);
    } catch (err) {
        return cb(err);
    }
}

module.exports = { verifyStrategyLoginCb }